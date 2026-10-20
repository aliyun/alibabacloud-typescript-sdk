// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mode of the HTTP DDoS Attack prevention mitigation policies.
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
   * C370DAF1-C838-4288-A1A0-9A87633D248E
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
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

