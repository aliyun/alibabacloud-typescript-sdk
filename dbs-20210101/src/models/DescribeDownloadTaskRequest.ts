// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set generated when you create a download task. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/26273.html) operation to query the ID.
   * 
   * @example
   * 216****
   */
  backupSetId?: string;
  /**
   * @example
   * dds-example
   */
  clusterName?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The ID of the Database Backup (DBS) data source. Specify the parameter in the format of *ds-${Instance ID}_${regionId}*.
   * 
   * @example
   * ds-rm-2ze8g2am97624****_cn-hangzhou
   */
  datasourceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify this parameter as a timestamp of the LONG type. Unit: milliseconds.
   * 
   * @example
   * 1661941556000
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > This parameter is required.
   * 
   * @example
   * rm-bp1imnmcjxdz7****
   */
  instanceName?: string;
  /**
   * @remarks
   * The column based on which the entries are sorted. By default, the entries are sorted by the time when the download task was created. Set the value to **gmt_create**.
   * 
   * @example
   * gmt_create
   */
  orderColumn?: string;
  /**
   * @remarks
   * The order in which you want to sort the entries. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc**: the descending order. This is the default value.
   * 
   * @example
   * desc
   */
  orderDirect?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html) operation to query the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify this parameter as a timestamp of the LONG type. Unit: milliseconds.
   * 
   * @example
   * 1661941554000
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the download task. Valid values:
   * 
   * *   **Initializing**: The download task is being initialized.
   * *   **queueing**: The download task is queuing.
   * *   **running**: The download task is running.
   * *   **failed**: The download task fails.
   * *   **finished**: The download task is complete.
   * *   **expired**: The download task expires.
   * 
   * @example
   * queueing
   */
  state?: string;
  /**
   * @remarks
   * The type of the download task. Valid values:
   * 
   * *   **full**: downloads a full backup set.
   * *   **pitr**: downloads a backup set at a specific point in time.
   * 
   * @example
   * full
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      clusterName: 'ClusterName',
      currentPage: 'CurrentPage',
      datasourceId: 'DatasourceId',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      orderColumn: 'OrderColumn',
      orderDirect: 'OrderDirect',
      pageSize: 'PageSize',
      regionCode: 'RegionCode',
      startTime: 'StartTime',
      state: 'State',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      clusterName: 'string',
      currentPage: 'string',
      datasourceId: 'string',
      endTime: 'string',
      instanceName: 'string',
      orderColumn: 'string',
      orderDirect: 'string',
      pageSize: 'string',
      regionCode: 'string',
      startTime: 'string',
      state: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

