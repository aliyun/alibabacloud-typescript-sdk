import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValue } from "./ModuleVersionsValueComponentsValue";
export declare class ModuleVersionsValue extends $dara.Model {
    /**
     * @remarks
     * code
     *
     * @example
     * code
     */
    code?: string;
    /**
     * @remarks
     * name
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * components
     *
     * @example
     * {}
     */
    components?: {
        [key: string]: ModuleVersionsValueComponentsValue;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
