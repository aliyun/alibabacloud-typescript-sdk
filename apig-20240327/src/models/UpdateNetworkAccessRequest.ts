// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The expected network access type after the change. For example, to add public network access to a private network gateway, set this parameter to private&pubnet. To remove private network access from a gateway that supports both public and private network access, set this parameter to pubnet.
   * 
   * Valid values:
   * 
   * - privatenet: private network only.
   * - private&pubnet: public network and private network.
   * - pubnet: public network only.
   * 
   * This parameter is required.
   * 
   * @example
   * private&pubnet
   */
  networkAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessType: 'networkAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

