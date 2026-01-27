// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSandboxInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/437215.html) operation to query the ID of the backup schedule.
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
   * The ID of the sandbox instance. You can call the [DescribeSandboxInstances](https://help.aliyun.com/document_detail/437257.html) operation to query the ID of the sandbox instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1jxxxxnxxx1xc
   */
  instanceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      instanceId: 'InstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      instanceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

