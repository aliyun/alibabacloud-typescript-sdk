// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status based on which the model versions are queried. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The model format used to filter model versions. Valid values:
   * 
   * *   OfflineModel
   * *   SavedModel
   * *   Keras H5
   * *   Frozen Pb
   * *   Caffe Prototxt
   * *   TorchScript
   * *   XGBoost
   * *   PMML
   * *   AlinkModel
   * *   ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The framework used to filter model versions.
   * 
   * *   Pytorch -XGBoost
   * *   Keras
   * *   Caffe
   * *   Alink
   * *   Xflow
   * *   TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The label. Model versions whose label key or label value contains a specific label are filtered.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used to sort the results. The GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source type is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Take note of the following parameters:
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id is a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type used to filter model versions. Valid values:
   * 
   * *   Custom (default)
   * *   PAIFlow
   * *   TrainingService
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The model version used to filter model versions.
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

