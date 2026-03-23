// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCollationTimeZoneRequest extends $dara.Model {
  collation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

