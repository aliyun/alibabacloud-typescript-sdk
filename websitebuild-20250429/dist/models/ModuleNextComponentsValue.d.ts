import * as $dara from '@darabonba/typescript';
import { ModuleNextComponentsValuePropertiesValue } from "./ModuleNextComponentsValuePropertiesValue";
export declare class ModuleNextComponentsValueInstancePropertyValues extends $dara.Model {
    /**
     * @remarks
     * Property code (internal system identifier)
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * Property value code (internal system value)
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * Property display name (user-visible name)
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
export declare class ModuleNextComponentsValueInstanceProperty extends $dara.Model {
    /**
     * @remarks
     * Property code (internal system identifier)
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * Property display name (user-visible name)
     *
     * @example
     * placeholder
     */
    name?: string;
    /**
     * @remarks
     * Property value code (internal system value)
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * Module property value list
     */
    values?: ModuleNextComponentsValueInstancePropertyValues[];
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
export declare class ModuleNextComponentsValue extends $dara.Model {
    /**
     * @remarks
     * Component unique code (internal system identifier)
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * Component display name (user-visible name)
     *
     * @example
     * placeholder
     */
    name?: string;
    /**
     * @remarks
     * Component instance property configuration
     */
    instanceProperty?: ModuleNextComponentsValueInstanceProperty[];
    /**
     * @remarks
     * Component instance property configuration
     *
     * @example
     * {"deploy_area":{"Code":"deploy_area","Name":"部署地区","Value":"HongKong","Values":[{"Value":"HongKong","Name":"中国香港"}]}}
     */
    properties?: {
        [key: string]: ModuleNextComponentsValuePropertiesValue;
    };
    /**
     * @remarks
     * Module property status
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
