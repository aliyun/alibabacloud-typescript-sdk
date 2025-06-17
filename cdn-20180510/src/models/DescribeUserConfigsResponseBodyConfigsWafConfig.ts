// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConfigsResponseBodyConfigsWafConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether WAF is enabled.
   * 
   * @example
   * on
   */
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

