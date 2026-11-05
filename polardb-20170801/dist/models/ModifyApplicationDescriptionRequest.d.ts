import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The description of the application.
     *
     * This parameter is required.
     *
     * @example
     * my app
     */
    description?: string;
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
