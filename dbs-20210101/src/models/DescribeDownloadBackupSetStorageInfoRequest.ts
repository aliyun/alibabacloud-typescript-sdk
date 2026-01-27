// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadBackupSetStorageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 30****
   */
  backupSetId?: string;
  /**
   * @example
   * dds-example
   */
  clusterName?: string;
  /**
   * @remarks
   * The validity period of the URL that is used as the download destination. Take note of the following items:
   * 
   * *   Default value: 7200. This means that the URL is valid for 2 hours by default.
   * *   Valid values: 300 to 86400. Unit: seconds. This means that you can specify a validity period in the range of 5 minutes to 1 day.
   * *   Before you specify this parameter, convert the validity period to seconds. For example, if you want to set the validity period of the URL to 5 minutes, enter 300.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  duration?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > The **BackupSetId** parameter is required if you specify the **InstanceName** parameter.
   * 
   * @example
   * rm-uf6qqf569n435****
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The download task ID.
   * 
   * *   The **BackupSetId** and **InstanceName** parameters are required if you do not specify the **TaskId** parameter.
   * *   To view the download task ID, go to the instance details page in the console and click **Backup and Restoration** in the left-side navigation pane. On the **Backup Download** tab, view the task ID.
   * 
   * @example
   * dt-s0ugzak9****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      clusterName: 'ClusterName',
      duration: 'Duration',
      instanceName: 'InstanceName',
      regionCode: 'RegionCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      clusterName: 'string',
      duration: 'string',
      instanceName: 'string',
      regionCode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

