// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSourceItem } from "./DataSourceItem";
import { TensorboardDataSourceSpec } from "./TensorboardDataSourceSpec";
import { TensorboardSpec } from "./TensorboardSpec";


export class CreateTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * 
   * *   PUBLIC: The configuration is public in the workspace.
   * *   PRIVATE: The configuration is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The dataset ID. 
   * <props="china">Call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to get the dataset ID.
   * 
   * @example
   * d-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * 
   * *   OSS
   * *   NAS
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSources?: DataSourceItem[];
  /**
   * @remarks
   * The TensorBoard name
   * 
   * @example
   * tensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The job ID. Call [ListJobs](https://help.aliyun.com/document_detail/459676.html) to get the job ID.
   * 
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum running duration. Unit: minutes.
   * 
   * @example
   * 240
   */
  maxRunningTimeMinutes?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 1000
   */
  memory?: number;
  /**
   * @remarks
   * The extended fields of the dataset are in the JSON format. MountPath: the path to mount the dataset.
   * 
   * @example
   * {"mountpath":"/root/data/"}
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. Default value: 1. Valid values: 1 to 9.
   * 
   * *   1 is the lowest priority.
   * *   9 is the highest priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The resource quota ID. This parameter is required when you create a TensorBoard job by using a resource quota. <props="china">Call [ListQuotas](https://help.aliyun.com/document_detail/2628071.html) to get the quota ID. 
   * This feature is currently limited to whitelisted users. If you need to use this feature, contact us.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * dlc-xxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * job
   */
  sourceType?: string;
  /**
   * @remarks
   * The directory of summary.
   * 
   * @example
   * /root/data/
   */
  summaryPath?: string;
  /**
   * @remarks
   * The relative path of summary.
   * 
   * @example
   * /summary/
   */
  summaryRelativePath?: string;
  /**
   * @remarks
   * The configurations of datasets mounted with the TensorBoard job.
   */
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @remarks
   * The pay-as-you-go configuration of TensorBoard, which is used to create TensorBoard jobs that use pay-as-you-go resources.
   */
  tensorboardSpec?: TensorboardSpec;
  /**
   * @remarks
   * The dataset URI.
   * 
   * *   Value format when DataSourceType is set to OSS: `oss://[oss-bucket].[endpoint]/[path]`.
   * *   Value format when DataSourceType is set to NAS:`nas://[nas-filesystem-id].[region]/[path]`.
   * 
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  /**
   * @remarks
   * The workspace ID. 
   * <props="china">Call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      cpu: 'Cpu',
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      jobId: 'JobId',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      memory: 'Memory',
      options: 'Options',
      priority: 'Priority',
      quotaId: 'QuotaId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      summaryPath: 'SummaryPath',
      summaryRelativePath: 'SummaryRelativePath',
      tensorboardDataSources: 'TensorboardDataSources',
      tensorboardSpec: 'TensorboardSpec',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      cpu: 'number',
      dataSourceId: 'string',
      dataSourceType: 'string',
      dataSources: { 'type': 'array', 'itemType': DataSourceItem },
      displayName: 'string',
      jobId: 'string',
      maxRunningTimeMinutes: 'number',
      memory: 'number',
      options: 'string',
      priority: 'string',
      quotaId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      summaryPath: 'string',
      summaryRelativePath: 'string',
      tensorboardDataSources: { 'type': 'array', 'itemType': TensorboardDataSourceSpec },
      tensorboardSpec: TensorboardSpec,
      uri: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.tensorboardDataSources)) {
      $dara.Model.validateArray(this.tensorboardDataSources);
    }
    if(this.tensorboardSpec && typeof (this.tensorboardSpec as any).validate === 'function') {
      (this.tensorboardSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

