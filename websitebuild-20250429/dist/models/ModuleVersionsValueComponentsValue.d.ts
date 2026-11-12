import * as $dara from '@darabonba/typescript';
import { ModuleVersionsValueComponentsValuePropertiesValue } from "./ModuleVersionsValueComponentsValuePropertiesValue";
export declare class ModuleVersionsValueComponentsValueInstancePropertyValues extends $dara.Model {
    /**
     * @remarks
     * 属性编码（系统内部标识）
     *
     * @example
     * code
     */
    code?: string;
    /**
     * @remarks
     * 属性值编码（系统内部值）
     *
     * @example
     * value
     */
    value?: string;
    /**
     * @remarks
     * 属性显示名称（用户可见名称）
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
     * 属性编码（系统内部标识）
     *
     * @example
     * code
     */
    code?: string;
    /**
     * @remarks
     * 属性显示名称（用户可见名称）
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * 属性值编码（系统内部值）
     *
     * @example
     * value
     */
    value?: string;
    /**
     * @remarks
     * 模块属性值列表
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
     * 组件唯一编码（系统内部标识）
     *
     * @example
     * ComponentCode
     */
    componentCode?: string;
    /**
     * @remarks
     * 组件显示名称（用户可见名称）
     *
     * @example
     * ComponentName
     */
    componentName?: string;
    /**
     * @remarks
     * 组件实例属性配置
     */
    instanceProperty?: ModuleVersionsValueComponentsValueInstanceProperty[];
    /**
     * @remarks
     * 组件实例属性配置
     *
     * @example
     * {}
     */
    properties?: {
        [key: string]: ModuleVersionsValueComponentsValuePropertiesValue;
    };
    /**
     * @remarks
     * 模块属性状态
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
