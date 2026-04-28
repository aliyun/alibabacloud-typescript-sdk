// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCostOptimizationOverviewRequest extends $dara.Model {
  /**
   * @example
   * 11***********35
   */
  assumeAliyunId?: number;
  assumeAliyunIdList?: number[];
  checkPlanId?: number;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      assumeAliyunIdList: 'AssumeAliyunIdList',
      checkPlanId: 'CheckPlanId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      assumeAliyunIdList: { 'type': 'array', 'itemType': 'number' },
      checkPlanId: 'number',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assumeAliyunIdList)) {
      $dara.Model.validateArray(this.assumeAliyunIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

