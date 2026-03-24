// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { TransformAction } from "./TransformAction";


export class AlertEventIntegrationPolicyForModify extends $dara.Model {
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * test integration
   */
  alertEventIntegrationPolicyName?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 过滤设置
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
  static names(): { [key: string]: string } {
    return {
      alertEventIntegrationPolicyName: 'alertEventIntegrationPolicyName',
      description: 'description',
      filterSetting: 'filterSetting',
      integrationSetting: 'integrationSetting',
      transformerSetting: 'transformerSetting',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventIntegrationPolicyName: 'string',
      description: 'string',
      filterSetting: FilterSetting,
      integrationSetting: 'string',
      transformerSetting: { 'type': 'array', 'itemType': TransformAction },
      type: 'string',
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

