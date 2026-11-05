import * as $dara from '@darabonba/typescript';
export declare class SwitchAppConversationRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the agent task.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The bot ID.
     *
     * @example
     * Zero2
     */
    botId?: string;
    /**
     * @remarks
     * The type of the agent task.
     *
     * @example
     * IMAGE_LOGO
     */
    taskType?: string;
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
