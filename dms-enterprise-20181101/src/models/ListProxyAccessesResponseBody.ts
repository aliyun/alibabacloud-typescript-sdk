// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProxyAccessesResponseBodyProxyAccessList } from "./ListProxyAccessesResponseBodyProxyAccessList";


export class ListProxyAccessesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * MissingProxyId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ProxyId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the users that are authorized to access the database instance by using the secure access proxy feature.
   */
  proxyAccessList?: ListProxyAccessesResponseBodyProxyAccessList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E53D178A-85E9-5E1F-88B6-3CB1FCF2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyAccessList: 'ProxyAccessList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyAccessList: { 'type': 'array', 'itemType': ListProxyAccessesResponseBodyProxyAccessList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.proxyAccessList)) {
      $dara.Model.validateArray(this.proxyAccessList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

