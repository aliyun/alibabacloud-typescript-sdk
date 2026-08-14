// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHealthCheckStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  networkRules?: string;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

