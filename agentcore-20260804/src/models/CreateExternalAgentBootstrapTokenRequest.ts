// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalAgentBootstrapTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The network type for connection. Valid values:
   * - INTERNET: public network
   * - INTRANET: internal network
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

