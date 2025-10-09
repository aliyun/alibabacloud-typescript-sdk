// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityScanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The compute engine used during execution. If it\\"s not specified, the data source connection defined in the Spec will be used.
   */
  computeResourceShrink?: string;
  /**
   * @remarks
   * Description of the data quality monitor.
   * 
   * @example
   * Daily data quality scanning of ods tables.
   */
  description?: string;
  /**
   * @remarks
   * The hook configuration after the data quality monitor stops.
   */
  hooksShrink?: string;
  /**
   * @remarks
   * The ID of the data quality monitor.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The name of the data quality monitor.
   * 
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the owner of the data quality monitor.
   * 
   * @example
   * 231263586109857423
   */
  owner?: string;
  /**
   * @remarks
   * The definition of execution parameters for the data quality monitor.
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace where the data quality monitor resides. You can obtain the workspace ID by calling the [ListProjects](https://help.aliyun.com/document_detail/2852607.html) operation.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during the execution of the data quality monitor.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The Spec code of the data quality monitoring content. For more information, see [Data quality Spec configuration description](https://help.aliyun.com/document_detail/2963394.html).
   * 
   * @example
   * {
   *     "datasets": [
   *         {
   *             "type": "Table",
   *             "dataSource": {
   *                 "name": "odps_first",
   *                 "envType": "Prod"
   *             },
   *             "tables": [
   *                 "ods_d_user_info"
   *             ],
   *             "filter": "pt = $[yyyymmdd-1]"
   *         }
   *     ],
   *     "rules": [
   *         {
   *             "assertion": "row_count > 0"
   *         }, {
   *             "templateId": "SYSTEM:field:null_value:fixed",
   *             "pass": "when = 0",
   *             "name": "The id cannot be empty.",
   *             "severity": "High",
   *              "identity": "a-customized-data-quality-rule-uuid"
   *         }
   *     ]
   * }
   */
  spec?: string;
  /**
   * @remarks
   * Trigger settings for the data quality monitor.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      computeResourceShrink: 'ComputeResource',
      description: 'Description',
      hooksShrink: 'Hooks',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      parametersShrink: 'Parameters',
      projectId: 'ProjectId',
      runtimeResourceShrink: 'RuntimeResource',
      spec: 'Spec',
      triggerShrink: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceShrink: 'string',
      description: 'string',
      hooksShrink: 'string',
      id: 'number',
      name: 'string',
      owner: 'string',
      parametersShrink: 'string',
      projectId: 'number',
      runtimeResourceShrink: 'string',
      spec: 'string',
      triggerShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

