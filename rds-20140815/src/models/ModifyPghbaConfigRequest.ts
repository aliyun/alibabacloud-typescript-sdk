// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyPGHbaConfigRequestHbaItem } from "./ModifyPghbaConfigRequestHbaItem";


export class ModifyPGHbaConfigRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * 1
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1lymyn1v3i****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * An array that consists of the details of the AD domain services.
   * 
   * This parameter is required.
   */
  hbaItem?: ModifyPGHbaConfigRequestHbaItem[];
  /**
   * @remarks
   * The method that you use to modify the pg_hba.conf file. Valid values:
   * 
   * *   **add**: adds one or more records. If you use this method, make sure that the value of the PriorityId parameter for each new record is different from the value of the PriorityId parameter for any existing record.
   * *   **delete**: deletes one or more records. If you use this method, the record that corresponds to the specified value of the **PriorityId** parameter is deleted from the pg_hba.conf file.
   * *   **modify**: modifies one or more records. If you use this method, the record that corresponds to the specified value of the **PriorityId** parameter is modified.
   * *   **update**: overwrites the existing configuration in the pg_hba.conf file by using the new configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  opsType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      hbaItem: 'HbaItem',
      opsType: 'OpsType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      hbaItem: { 'type': 'array', 'itemType': ModifyPGHbaConfigRequestHbaItem },
      opsType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hbaItem)) {
      $dara.Model.validateArray(this.hbaItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

