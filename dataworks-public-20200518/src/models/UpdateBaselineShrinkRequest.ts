// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether alerting is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  alertEnabled?: boolean;
  /**
   * @remarks
   * The baseline alert margin. Unit: minutes.
   * 
   * @example
   * 30
   */
  alertMarginThreshold?: number;
  /**
   * @remarks
   * The baseline alert configurations.
   */
  alertSettingsShrink?: string;
  /**
   * @remarks
   * The ID of the baseline. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000010800007
   */
  baselineId?: number;
  /**
   * @remarks
   * The baseline name.
   * 
   * @example
   * BaselineName
   */
  baselineName?: string;
  /**
   * @remarks
   * The baseline type. Valid values:
   * - DAILY: daily baseline.
   * - HOURLY: hourly baseline.
   * 
   * @example
   * DAILY
   */
  baselineType?: string;
  /**
   * @remarks
   * Specifies whether the baseline is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of upstream node IDs for the baseline, separated by commas. If there are many nodes, we recommend that you add a virtual node downstream for easier management.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The baseline committed time configurations.
   */
  overtimeSettingsShrink?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the baseline owner.
   * 
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @remarks
   * The priority of the baseline. Valid values: 1, 3, 5, 7, and 8.
   * 
   * @example
   * 7
   */
  priority?: number;
  /**
   * @remarks
   * The project ID. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2043
   */
  projectId?: number;
  /**
   * @remarks
   * The IDs of nodes to remove from the baseline. Separate multiple IDs with commas (,).
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

