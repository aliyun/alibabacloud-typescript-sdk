import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";
export declare class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
    /**
     * @remarks
     * The code of the property, which is an internal system identifier.
     *
     * @example
     * code
     */
    code?: string;
    /**
     * @remarks
     * The code of the property value, which is an internal system value.
     *
     * @example
     * value
     */
    value?: string;
    /**
     * @remarks
     * The display name of the property, which is visible to users.
     *
     * @example
     * name
     */
    name?: string;
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
export declare class ModuleVersionsValueComponentsValueInstanceProperty extends $dara.Model {
    /**
     * @remarks
     * The code of the property, which is an internal system identifier.
     *
     * @example
     * code
     */
    code?: string;
    /**
     * @remarks
     * The display name of the property, which is visible to users.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * The code of the property value, which is an internal system value.
     *
     * @example
     * value
     */
    value?: string;
    /**
     * @remarks
     * The list of module property values.
     */
    values?: ModuleVersionsValueComponentsValueInstancePropertyValues[];
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
export declare class ModuleVersionsValueComponentsValue extends $dara.Model {
    /**
     * @remarks
     * The unique code of the component, which is an internal system identifier.
     *
     * @example
     * ComponentCode
     */
    componentCode?: string;
    /**
     * @remarks
     * The display name of the component, which is visible to users.
     *
     * @example
     * ComponentName
     */
    componentName?: string;
    /**
     * @remarks
     * The instance property configuration of the component.
     */
    instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
    /**
     * @remarks
     * The instance property configuration of the component.
     *
     * @example
     * {}
     */
    properties?: {
        [key: string]: ModuleVersionsValueComponentsValuePropertiesValue;
    };
    /**
     * @remarks
     * The status of the module property.
     *
     * @example
     * 1
     */
    moduleAttrStatus?: number;
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
