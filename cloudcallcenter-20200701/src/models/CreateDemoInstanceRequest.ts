// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDemoInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  outboundCallWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      outboundCallWhitelist: 'OutboundCallWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outboundCallWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

