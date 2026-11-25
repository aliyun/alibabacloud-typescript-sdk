import * as $dara from '@darabonba/typescript';
export declare class ModuleVersionsValueComponentsValuePropertiesValueValues extends $dara.Model {
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
export declare class ModuleVersionsValueComponentsValuePropertiesValue extends $dara.Model {
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
