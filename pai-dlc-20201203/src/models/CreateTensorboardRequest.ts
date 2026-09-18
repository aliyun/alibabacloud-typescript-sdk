// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSourceItem } from "./DataSourceItem";
import { TensorboardDataSourceSpec } from "./TensorboardDataSourceSpec";
import { TensorboardSpec } from "./TensorboardSpec";


export class CreateTensorboardRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the job. Valid values:
   * - PUBLIC: Visible to all members in the workspace.
   * - PRIVATE: Visible only to you and administrators in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The dataset ID. <props="china">For information about how to obtain the dataset ID, see [ListDatasets](https://help.aliyun.com/document_detail/457222.html).
   * 
   * @example
   * d-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The dataset type. Valid values:
   * - OSS
   * - NAS
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The datasource configurations.
   */
  dataSources?: DataSourceItem[];
  /**
   * @remarks
   * The TensorBoard name.
   * 
   * @example
   * tensorboard
   */
  displayName?: string;
  /**
   * @remarks
   * The job ID. For information about how to obtain the job ID, see [ListJobs](https://help.aliyun.com/document_detail/459676.html).
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
   * The extended field of custom dataset in JSON format. Currently, MountPath is supported, which specifies the custom mount path of custom dataset.
   * 
   * @example
   * {"mountpath":"/root/data/"}
   */
  options?: string;
  /**
   * @remarks
   * The priority of the job. This is an optional parameter. Default value: 1. Valid values: 1 to 9.
   * - 1: the lowest priority.
   * - 9: the highest priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The resource quota ID. This parameter is required when you create a TensorBoard job by using resources from a resource quota. <props="china">For information about how to obtain the resource quota ID, see [ListQuotas](https://help.aliyun.com/document_detail/2628071.html).
   * <props="china">Published only on China site.
   * Currently, only whitelisted users can create TensorBoard jobs by using resource quota resources. To use this feature, contact us.
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
   * The summary directory.
   * 
   * @example
   * /root/data/
   */
  summaryPath?: string;
  /**
   * @remarks
   * The summary relative directory.
   * 
   * @example
   * /summary/
   */
  summaryRelativePath?: string;
  /**
   * @remarks
   * The list of dataset configurations mounted to the TensorBoard job.
   */
  tensorboardDataSources?: TensorboardDataSourceSpec[];
  /**
   * @remarks
   * The pay-as-you-go configuration for TensorBoard, which is used to create a TensorBoard job that uses pay-as-you-go resources.
   */
  tensorboardSpec?: TensorboardSpec;
  /**
   * @remarks
   * The URI of the dataset:
   * - If DataSourceType is set to OSS, the format is `oss://[oss-bucket].[endpoint]/[path]`.
   * - If DataSourceType is set to NAS, the format is `nas://[nas-filesystem-id].[region]/[path]`.
   * 
   * @example
   * oss://.oss-cn-shanghai-finance-1.aliyuncs.com/
   */
  uri?: string;
  /**
   * @remarks
   * The workspace ID. <props="china">For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

