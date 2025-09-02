// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the alerting feature. Valid values: true and false.
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The alert margin threshold of the baseline. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The alert settings of the baseline.
   */
  alertSettingsShrink?: string;
  /**
   * @remarks
   * The baseline ID. You can call the [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000010800007
   */
  baselineId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values: DAILY and HOURLY.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * Specifies whether to enable the baseline. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ancestor nodes of nodes in the baseline. Separate the ancestor nodes with commas (,). If a large number of ancestor nodes exist, we recommend that you create a zero load node and configure the zero load node as the descendant node of nodes in the baseline to facilitate node management.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The settings of the committed completion time of the baseline.
   */
  overtimeSettingsShrink?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the baseline owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: {1,3,5,7,8}.
   * 
   * @example
   * 7
   */
  priority?: number;
  /**
   * @remarks
   * The workspace ID. You can call the [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the node that you want to disassociate from the baseline. You can specify multiple node IDs. Separate multiple node IDs with commas (,).
   * 
   * @example
   * 123,456
   */
  removeNodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      alertEnabled: 'AlertEnabled',
      alertMarginThreshold: 'AlertMarginThreshold',
      alertSettingsShrink: 'AlertSettings',
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      baselineType: 'BaselineType',
      enabled: 'Enabled',
      nodeIds: 'NodeIds',
      overtimeSettingsShrink: 'OvertimeSettings',
      owner: 'Owner',
      priority: 'Priority',
      projectId: 'ProjectId',
      removeNodeIds: 'RemoveNodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEnabled: 'boolean',
      alertMarginThreshold: 'number',
      alertSettingsShrink: 'string',
      baselineId: 'number',
      baselineName: 'string',
      baselineType: 'string',
      enabled: 'boolean',
      nodeIds: 'string',
      overtimeSettingsShrink: 'string',
      owner: 'string',
      priority: 'number',
      projectId: 'number',
      removeNodeIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

