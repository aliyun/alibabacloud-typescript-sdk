// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. This parameter is used to filter the model version list. Valid values:
   * 
   * - Pending: The model version is pending approval.
   * 
   * - Approved: The model version is approved for publishing.
   * 
   * - Rejected: The model version is rejected for publishing.
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The model format. This parameter is used to filter the model version list. Valid values:
   * 
   * - OfflineModel
   * 
   * - SavedModel
   * 
   * - Keras H5
   * 
   * - Frozen Pb
   * 
   * - Caffe Prototxt
   * 
   * - TorchScript
   * 
   * - XGBoost
   * 
   * - PMML
   * 
   * - AlinkModel
   * 
   * - ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The model framework. This parameter is used to filter the model version list. Valid values:
   * 
   * - Pytorch
   *   -XGBoost
   * 
   * - Keras
   * 
   * - Caffe
   * 
   * - Alink
   * 
   * - Xflow
   * 
   * - TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The label string. This parameter is used to filter the list. Model versions that have the specified string in the key or value of their labels are returned.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The order in which to sort the entries in the paged query. The default value is ASC.
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the model version list. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to use for sorting in the paged query. Currently, the GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * - If the source type is Custom, this parameter is not restricted.
   * 
   * - If the source is PAIFlow or TrainingService, the format is as follows:
   * 
   * ```
   * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * ```
   * 
   * where:
   * 
   * - region is the Alibaba Cloud region ID.
   * 
   * - workspaceId is the workspace ID.
   * 
   * - kind: the type. Valid values: PipelineRun (PAIFlow pipeline) and ServiceJob (training service).
   * 
   * - id: the unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the model. This parameter is used to filter the model version list. Valid values:
   * 
   * - Custom (default): a custom model.
   * 
   * - PAIFlow: a model from a PAI pipeline.
   * 
   * - TrainingService: a model from a PAI training service.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The model version name. This parameter is used to filter the model version list.
   * 
   * @example
   * 1.0.1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      formatType: 'string',
      frameworkType: 'string',
      label: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

