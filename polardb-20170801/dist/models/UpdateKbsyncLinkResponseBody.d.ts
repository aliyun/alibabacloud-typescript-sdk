import * as $dara from '@darabonba/typescript';
export declare class UpdateKBSyncLinkResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the synchronization link.
     *
     * @example
     * pkbl-xxxxx
     */
    linkId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EBEAA83D-1734-42E3-85E3-E25F6E******
     */
    requestId?: string;
    /**
     * @remarks
     * The scheduled time of the synchronization task.
     */
    syncSchedule?: string;
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
