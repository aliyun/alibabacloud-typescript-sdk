// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCheckShrinkRequest extends $dara.Model {
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
  resourceDimensionListShrink?: string;
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
      resourceDimensionListShrink: 'ResourceDimensionList',
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
      resourceDimensionListShrink: 'string',
      resourceId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

