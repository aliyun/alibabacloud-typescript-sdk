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
   * The compute engine used when the data quality monitor runs. This parameter is optional. If it is not specified, the data source connection specified in the Spec is used.
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
   * The configuration for hooks that run after the data quality monitor finishes.
   */
  hooksShrink?: string;
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
   * 95279527****
   */
  owner?: string;
  /**
   * @remarks
   * The execution parameter definitions of the data quality monitor.
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview) and go to the Workspace Management page to obtain the workspace ID. This parameter specifies the DataWorks workspace for the API call.
   * 
   * @example
   * 101
   */
  projectId?: number;
  /**
   * @remarks
   * The resource group used when the data quality monitor runs.
   */
  runtimeResourceShrink?: string;
  /**
   * @remarks
   * The Spec code that defines the data quality monitor. For more information, see [Data quality spec configuration guide](https://help.aliyun.com/document_detail/2963394.html).
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
   * The trigger settings of the data quality monitor.
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

