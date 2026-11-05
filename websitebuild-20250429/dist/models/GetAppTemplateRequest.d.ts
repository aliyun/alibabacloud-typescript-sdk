import * as $dara from '@darabonba/typescript';
export declare class GetAppTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * The template ID.
     *
     * @example
     * JKSVNY04LH7DRI6F
     */
    templateId?: string;
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
