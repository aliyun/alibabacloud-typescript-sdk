// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditUsageInfoRequest extends $dara.Model {
  bizType?: string;
  instanceIds?: string[];
  /**
   * @example
   * User
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      instanceIds: 'InstanceIds',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      usageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

