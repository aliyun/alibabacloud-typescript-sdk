// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheReservePriceGapRequest extends $dara.Model {
  /**
   * @example
   * esa-cr-9tuv*********
   */
  instanceId?: string;
  /**
   * @example
   * 1000
   */
  targetQuotaGb?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      targetQuotaGb: 'TargetQuotaGb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      targetQuotaGb: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

