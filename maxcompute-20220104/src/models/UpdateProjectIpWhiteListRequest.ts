// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * json {"ipWhiteList":{"ipList": "", // The IP address whitelists are of the STRING data type. Separate multiple IP address whitelists with commas (,). "vpcIpList": "", //} }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

