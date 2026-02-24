// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { TransformAction } from "./TransformAction";


export class AlertEventIntegrationPolicyForView extends $dara.Model {
  /**
   * @remarks
   * UUID
   * 
   * @example
   * 123123123
   */
  alertEventIntegrationPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertEventIntegrationPolicyName?: string;
  /**
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  filterSetting?: FilterSetting;
  /**
   * @example
   * {"region":"cn-hangzhou"}
   */
  integrationSetting?: string;
  /**
   * @example
   * 10-16818f1445e10a1d012922b285bfb334
   */
  token?: string;
  transformerSetting?: TransformAction[];
  /**
   * @example
   * ALERT_CUSTOM
   */
  type?: string;
  /**
   * @example
   * 2024-12-16T02:00:23Z
   */
  updateTime?: string;
  /**
   * @example
   * 123123
   */
  userId?: string;
  /**
   * @remarks
   * workspace
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

