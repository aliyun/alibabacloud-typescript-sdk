// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { TransformAction } from "./TransformAction";


export class AlertEventIntegrationPolicyForView extends $dara.Model {
  alertEventIntegrationPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertEventIntegrationPolicyName?: string;
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  integrationSetting?: string;
  token?: string;
  transformerSetting?: TransformAction[];
  type?: string;
  updateTime?: string;
  userId?: string;
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

