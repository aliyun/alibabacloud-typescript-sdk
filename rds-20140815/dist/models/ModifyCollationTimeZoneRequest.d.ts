import * as $dara from '@darabonba/typescript';
export declare class ModifyCollationTimeZoneRequest extends $dara.Model {
    /**
     * @remarks
     * The system character set collation. By default, this parameter is not modified. Valid values:
     * * **Chinese_PRC_CI_AS**
     * * **Chinese_PRC_CS_AS**
     * * **Chinese_PRC_BIN**
     * * **Latin1_General_CI_AS**
     * * **Latin1_General_CS_AS**
     * * **SQL_Latin1_General_CP1_CI_AS**
     * * **SQL_Latin1_General_CP1_CS_AS**
     * * **Japanese_CI_AS**
     * * **Japanese_CS_AS**
     * * **Chinese_Taiwan_Stroke_CI_AS**
     * * **Chinese_Taiwan_Stroke_CS_AS**
     *
     * > - The default character set collation of the instance is **Chinese_PRC_CI_AS**.
     * > - You must specify at least one of the **Collation** and **Timezone** parameters.
     *
     * @example
     * Chinese_PRC_CS_AS
     */
    collation?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp15qi0nd1u27****
     */
    DBInstanceId?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The system time zone. By default, this parameter is not modified.
     *
     * > - The default time zone of the instance is **China Standard Time**.
     * > - You must specify at least one of the **Collation** and **Timezone** parameters.
     *
     * @example
     * China Standard Time
     */
    timezone?: string;
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
