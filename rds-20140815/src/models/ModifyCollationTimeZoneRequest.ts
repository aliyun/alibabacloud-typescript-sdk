// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollationTimeZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The system character set collation. By default, the value is not modified. Valid values:
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
   * > - You must specify at least one of **Collation** and **Timezone**.
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
   * The system time zone. By default, the value is not modified.
   * 
   * > - The default time zone of the instance is **China Standard Time**.
   * > - You must specify at least one of **Collation** and **Timezone**.
   * 
   * @example
   * China Standard Time
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

