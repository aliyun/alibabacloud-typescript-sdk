// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostOptimizationOverviewShrinkRequest extends $dara.Model {
  /**
   * @example
   * 11***********35
   */
  assumeAliyunId?: number;
  assumeAliyunIdListShrink?: string;
  checkPlanId?: number;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      assumeAliyunIdListShrink: 'AssumeAliyunIdList',
      checkPlanId: 'CheckPlanId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      assumeAliyunIdListShrink: 'string',
      checkPlanId: 'number',
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

