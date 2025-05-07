// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsKeepAliveResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  isKeepAlive?: boolean;
  /**
   * @example
   * cn-hangzhou+dir-885351****
   */
  officeSiteId?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

