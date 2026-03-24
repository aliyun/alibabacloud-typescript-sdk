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
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * 集成名
   */
  alertEventIntegrationPolicyName?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * 是否启用
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 过滤配置
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * 订阅设置
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  integrationSetting?: string;
  /**
   * @remarks
   * 集成的上报入口key
   * 
   * @example
   * 10-16818f1445e10a1d012922b285bfb334
   */
  token?: string;
  /**
   * @remarks
   * 转换设置
   */
  transformerSetting?: TransformAction[];
  /**
   * @remarks
   * 类型
   * 
   * @example
   * ALERT_CUSTOM
   */
  type?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2024-12-16T02:00:23Z
   */
  updateTime?: string;
  /**
   * @remarks
   * 用户id
   * 
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

