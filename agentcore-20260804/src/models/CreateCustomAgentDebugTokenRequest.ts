// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentDebugTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The network type used for local debugging. INTERNET indicates public network access, and INTRANET indicates access over a virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

