import * as $dara from '@darabonba/typescript';
export declare class DeleteAppSceneRecipientRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The recipient ID.
     *
     * @example
     * 1
     */
    recipientId?: string;
    /**
     * @remarks
     * The scenario ID.
     *
     * @example
     * 1000006921
     */
    sceneId?: string;
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
