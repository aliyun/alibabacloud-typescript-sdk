import * as $dara from '@darabonba/typescript';
export declare class ModuleNextComponentsValuePropertiesValueValues extends $dara.Model {
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
export declare class ModuleNextComponentsValuePropertiesValue extends $dara.Model {
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
    values?: ModuleNextComponentsValuePropertiesValueValues[];
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
