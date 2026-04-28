// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshAdvisorCostCheckShrinkRequest extends $dara.Model {
  assumeAliyunIdListShrink?: string;
  checkIdsShrink?: string;
  checkPlanId?: number;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * false
   */
  refreshResource?: boolean;
  resourceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkIdsShrink: 'CheckIds',
      checkPlanId: 'CheckPlanId',
      product: 'Product',
      refreshResource: 'RefreshResource',
      resourceIdsShrink: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunIdListShrink: 'string',
      checkIdsShrink: 'string',
      checkPlanId: 'number',
      product: 'string',
      refreshResource: 'boolean',
      resourceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

