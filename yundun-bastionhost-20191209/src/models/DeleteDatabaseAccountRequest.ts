// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatabaseAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account to delete.
   * > You can call the [ListDatabaseAccounts](https://help.aliyun.com/document_detail/2758839.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 9
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The ID of the bastion host instance to which the database account to be deleted belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host to which the database account to be deleted belongs.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

