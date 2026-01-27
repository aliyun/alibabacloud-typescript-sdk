// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsKeepAliveResponseBody extends $dara.Model {
  /**
   * @remarks
   * Identifies whether the user should remain logged on to the client.
   * 
   * @example
   * True
   */
  isKeepAlive?: boolean;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 141631846826****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      isKeepAlive: 'IsKeepAlive',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isKeepAlive: 'boolean',
      officeSiteId: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

