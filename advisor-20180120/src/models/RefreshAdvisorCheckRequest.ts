// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCheckRequestResourceDimensionList extends $dara.Model {
  cost?: boolean;
  performance?: boolean;
  product?: string;
  productName?: string;
  reliablility?: boolean;
  security?: boolean;
  service?: boolean;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      performance: 'Performance',
      product: 'Product',
      productName: 'ProductName',
      reliablility: 'Reliablility',
      security: 'Security',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'boolean',
      performance: 'boolean',
      product: 'string',
      productName: 'string',
      reliablility: 'boolean',
      security: 'boolean',
      service: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshAdvisorCheckRequest extends $dara.Model {
  assumeAliyunId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  resourceDimensionList?: RefreshAdvisorCheckRequestResourceDimensionList[];
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      language: 'Language',
      product: 'Product',
      resourceDimensionList: 'ResourceDimensionList',
      resourceId: 'ResourceId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      product: 'string',
      resourceDimensionList: { 'type': 'array', 'itemType': RefreshAdvisorCheckRequestResourceDimensionList },
      resourceId: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceDimensionList)) {
      $dara.Model.validateArray(this.resourceDimensionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

