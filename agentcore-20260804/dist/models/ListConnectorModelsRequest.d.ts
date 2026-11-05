import * as $dara from '@darabonba/typescript';
export declare class ListConnectorModelsRequest extends $dara.Model {
    /**
     * @remarks
     * The Connector Key ID. This parameter is not supported in the current version.
     *
     * @example
     * ckey-xxxx
     */
    connectorKeyId?: string;
    /**
     * @remarks
     * The page size. This parameter is not supported in the current version.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The next page token. This parameter is not supported in the current version.
     *
     * @example
     * dGVzdA==
     */
    nextToken?: string;
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
