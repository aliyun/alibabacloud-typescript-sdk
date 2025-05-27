// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutomateResponseConfigFeatureResponseBodyDataRightValueEnums extends $dara.Model {
  /**
   * @remarks
   * The enumerated value of the right operand.
   * 
   * @example
   * serious
   */
  value?: string;
  /**
   * @remarks
   * The internal code of the enumerated value.
   * 
   * @example
   * aliyun.siem.automate.feature.alert_level.serious
   */
  valueMds?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      valueMds: 'ValueMds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      valueMds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

