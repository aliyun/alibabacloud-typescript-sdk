// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachDatabaseAccountsFromUserRequestDatabases } from "./DetachDatabaseAccountsFromUserRequestDatabases";


export class DetachDatabaseAccountsFromUserRequest extends $dara.Model {
  /**
   * @remarks
   * The databases.
   */
  databases?: DetachDatabaseAccountsFromUserRequestDatabases[];
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the DescribeInstances operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-pe335ipfk01
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user from whom you want to revoke the permissions on databases and database accounts.
   * 
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query the ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DetachDatabaseAccountsFromUserRequestDatabases },
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

