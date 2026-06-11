// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { TransformAction } from "./TransformAction";


export class AlertEventIntegrationPolicyForView extends $dara.Model {
  /**
   * @remarks
   * The universally unique identifier (UUID).
   * 
   * @example
   * 123123123
   */
  alertEventIntegrationPolicyId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * 集成名
   */
  alertEventIntegrationPolicyName?: string;
  /**
   * @remarks
   * The time when the policy was created.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The filter configuration.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The subscription settings.
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  integrationSetting?: string;
  /**
   * @remarks
   * The key for the integration\\"s reporting endpoint.
   * 
   * @example
   * 10-16818f1445e10a1d012922b285bfb334
   */
  token?: string;
  /**
   * @remarks
   * The transformation settings.
   */
  transformerSetting?: TransformAction[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ALERT_CUSTOM
   */
  type?: string;
  /**
   * @remarks
   * The time when the policy was last updated.
   * 
   * @example
   * 2024-12-16T02:00:23Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123123
   */
  userId?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      alertEventIntegrationPolicyId: 'alertEventIntegrationPolicyId',
      alertEventIntegrationPolicyName: 'alertEventIntegrationPolicyName',
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      integrationSetting: 'integrationSetting',
      token: 'token',
      transformerSetting: 'transformerSetting',
      type: 'type',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventIntegrationPolicyId: 'string',
      alertEventIntegrationPolicyName: 'string',
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      integrationSetting: 'string',
      token: 'string',
      transformerSetting: { 'type': 'array', 'itemType': TransformAction },
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(Array.isArray(this.transformerSetting)) {
      $dara.Model.validateArray(this.transformerSetting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

