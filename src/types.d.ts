interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    export const ReactComponent: SvgrComponent;
    const value: SvgrComponent;
    export default value;
}