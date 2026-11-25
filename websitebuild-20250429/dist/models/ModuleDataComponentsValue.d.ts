import * as $dara from '@darabonba/typescript';
import { ModuleDataComponentsValuePropertiesValue } from "./ModuleDataComponentsValuePropertiesValue";
export declare class ModuleDataComponentsValueInstancePropertyValues extends $dara.Model {
    /**
     * @remarks
     * The property code (internal system identifier).
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * The property value code (internal system value).
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * The display name of the property (user-visible name).
     *
     * @example
     * placeholder
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
export declare class ModuleDataComponentsValueInstanceProperty extends $dara.Model {
    /**
     * @remarks
     * The property code (internal system identifier).
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * The display name of the property (user-visible name).
     *
     * @example
     * placeholder
     */
    name?: string;
    /**
     * @remarks
     * The property value code (internal system value).
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * The list of module property values.
     */
    values?: ModuleDataComponentsValueInstancePropertyValues[];
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
export declare class ModuleDataComponentsValue extends $dara.Model {
    /**
     * @remarks
     * The unique component code (internal system identifier).
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * The display name of the component (user-visible name).
     *
     * @example
     * placeholder
     */
    name?: string;
    /**
     * @remarks
     * The instance property configuration of the component.
     */
    instanceProperty?: ModuleDataComponentsValueInstanceProperty[];
    /**
     * @remarks
     * The instance property configuration of the component.
     *
     * @example
     * {"deploy_area":{"Code":"deploy_area","Name":"Deployment region","Value":"HongKong","Values":[{"Value":"HongKong","Name":"China (Hong Kong)"}]}}
     */
    properties?: {
        [key: string]: ModuleDataComponentsValuePropertiesValue;
    };
    /**
     * @remarks
     * The module property status.
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
