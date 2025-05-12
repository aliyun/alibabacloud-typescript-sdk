// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayDomainsResponseBodyCustomDomains } from "./ListGatewayDomainsResponseBodyCustomDomains";


export class ListGatewayDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom domain names.
   */
  customDomains?: ListGatewayDomainsResponseBodyCustomDomains[];
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully get custom domains
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'CustomDomains',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': ListGatewayDomainsResponseBodyCustomDomains },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

