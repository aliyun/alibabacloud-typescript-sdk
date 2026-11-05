import * as $dara from '@darabonba/typescript';
export declare class ModuleVersionsValueComponentsValuePropertiesValueValues extends $dara.Model {
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
export declare class ModuleVersionsValueComponentsValuePropertiesValue extends $dara.Model {
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
    values?: ModuleVersionsValueComponentsValuePropertiesValueValues[];
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
