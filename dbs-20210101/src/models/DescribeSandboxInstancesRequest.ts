// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/437215.html) operation to obtain the ID of the backup schedule.
   * 
   * > If your instance is an ApsaraDB RDS for MySQL instance, you can [configure automatic access to a data source](https://help.aliyun.com/document_detail/193091.html) to automatically add the instance to DBS and obtain the ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1hxxxx8xxxxxa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the sandbox instance. You can call the [CreateSandboxInstance](https://help.aliyun.com/document_detail/437252.html) operation to obtain the ID of the sandbox instance.
   * 
   * @example
   * 1jxxxxnxxx1xc
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   30\\. This is the default value.
   * *   50
   * *   100
   * 
   * @example
   * 30
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

