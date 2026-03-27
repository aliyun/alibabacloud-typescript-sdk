// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { TransformAction } from "./TransformAction";


export class AlertEventIntegrationPolicyForModify extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test integration
   */
  alertEventIntegrationPolicyName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  filterSetting?: FilterSetting;
  /**
   * @example
   * {"region":"cn-hangzhou"}
   */
  integrationSetting?: string;
  transformerSetting?: TransformAction[];
  /**
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

