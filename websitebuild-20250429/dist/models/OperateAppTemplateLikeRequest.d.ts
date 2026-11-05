import * as $dara from '@darabonba/typescript';
export declare class OperateAppTemplateLikeRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the template is favorited.
     */
    liked?: boolean;
    /**
     * @remarks
     * The template ID.
     *
     * @example
     * K191WHV12URYQN06
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
