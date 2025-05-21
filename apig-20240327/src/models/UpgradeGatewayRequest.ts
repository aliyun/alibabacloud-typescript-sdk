// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Gateway version.
   * 
   * @example
   * 2.0.2
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

