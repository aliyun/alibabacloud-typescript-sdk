// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollationTimeZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The character set collation of the instance. By default, the system does not modify the character set collation of the instance. Valid values:
   * 
   * *   **Chinese_PRC_CI_AS**
   * *   **Chinese_PRC_CS_AS**
   * *   **Chinese_PRC_BIN**
   * *   **Latin1_General_CI_AS**
   * *   **Latin1_General_CS_AS**
   * *   **SQL_Latin1_General_CP1_CI_AS**
   * *   **SQL_Latin1_General_CP1_CS_AS**
   * *   **Japanese_CI_AS**
   * *   **Japanese_CS_AS**
   * *   **Chinese_Taiwan_Stroke_CI_AS**
   * *   **Chinese_Taiwan_Stroke_CS_AS**
   * 
   * > *   The default character set collation of the instance is **Chinese_PRC_CI_AS**.
   * > *   You must specify one of the **Collation** and **Timezone** parameters.
   * 
   * @example
   * Latin1_General_CI_AS
   */
  collation?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time zone of the instance. By default, the system does not modify the time zone.
   * 
   * > *   The default time zone of the instance is **China Standard Time**.
   * > *   You must specify one of the **Collation** and **Timezone** parameters.
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

