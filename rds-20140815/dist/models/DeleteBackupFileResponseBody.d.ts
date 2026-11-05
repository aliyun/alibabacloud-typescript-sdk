import * as $dara from '@darabonba/typescript';
export declare class DeleteBackupFileResponseBodyDeletedBaksetIds extends $dara.Model {
    deletedBaksetIds?: number[];
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
export declare class DeleteBackupFileResponseBody extends $dara.Model {
    deletedBaksetIds?: DeleteBackupFileResponseBodyDeletedBaksetIds;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C7B3A91C-0ACD-4948-ACAE-****
     */
    requestId?: string;
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
