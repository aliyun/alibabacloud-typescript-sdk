// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHttpDDoSAttackProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The level of HTTP DDoS attack protection. Valid values:
   * 
   * *   **very weak**: very loose.
   * *   **weak**: loose.
   * *   **default**: normal.
   * *   **hard**: strict.
   * 
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35C66C7B-671H-4297-9187-2C4477247A78
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      globalMode: 'GlobalMode',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalMode: 'string',
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

