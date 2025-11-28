// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScanRuleRequest extends $dara.Model {
  /**
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * crscnr-aemytkwad2h7fyhb
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

