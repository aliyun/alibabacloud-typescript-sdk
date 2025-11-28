// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crscnr-2sdveqjhpzdcafyq
   */
  scanRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scanRuleId: 'ScanRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scanRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

