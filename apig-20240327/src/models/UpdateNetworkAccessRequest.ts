// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The expected network access type after the modification. For example, if public network access is added to a private gateway, set this parameter to private&pubnet. If private network access is removed from a gateway with both public and private network access, set this parameter to pubnet.
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

