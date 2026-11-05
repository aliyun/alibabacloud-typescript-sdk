import * as $dara from '@darabonba/typescript';
export declare class DescribeCharacterSetNameRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > This operation supports only PolarDB for MySQL clusters. If you specify the cluster ID of a PolarDB for PostgreSQL or PolarDB for PostgreSQL (Oracle Compatible) cluster, `CharacterSetNameItems` will be empty in the response.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
