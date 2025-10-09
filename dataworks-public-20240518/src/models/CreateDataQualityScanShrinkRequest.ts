// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityScanShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token.
   * 
   * This parameter is required.
   * 
   * @example
   * a-customized-uuid
   */
  clientToken?: string;
  /**
   * @remarks
   * The compute engine used at runtime. If not specified, the data source defined in the Spec is used.
   */
  computeResourceShrink?: string;
  /**
   * @remarks
   * The description of the data quality monitor.
   * 
   * @example
   * Daily data quality scanning of ods tables.
   */
  description?: string;
  /**
   * @remarks
   * The Hook configurations after the data quality monitoring run ends.
   */
  hooksShrink?: string;
  /**
   * @remarks
   * The data quality monitoring name.
   * 
   * @example
   * data_quality_scan_001
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who owns of the data quality monitor.
   * 
   * @example
   * 95279527****
   */
  owner?: string;
  /**
   * @remarks
   * The definition of execution parameters for the data quality monitoring.
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. This parameter is required to specify the target DataWorks workspace for this API operation.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used during execution of the data quality monitoring.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * Spec code for the content of the data quality monitoring.
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
   * The trigger configurations of the data quality monitoring task.
   */
  triggerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      computeResourceShrink: 'ComputeResource',
      description: 'Description',
      hooksShrink: 'Hooks',
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
      clientToken: 'string',
      computeResourceShrink: 'string',
      description: 'string',
      hooksShrink: 'string',
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

