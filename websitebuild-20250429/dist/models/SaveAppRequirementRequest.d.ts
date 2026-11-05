import * as $dara from '@darabonba/typescript';
export declare class SaveAppRequirementRequest extends $dara.Model {
    /**
     * @remarks
     * Conversation ID
     *
     * @example
     * 5b7105a2-2999-430b-ba23-ba09149d5434
     */
    conversationId?: string;
    /**
     * @remarks
     * Requirement document content
     *
     * @example
     * prd
     */
    prd?: string;
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
