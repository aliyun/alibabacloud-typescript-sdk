// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The level of HTTP DDoS attack protection. Valid values:
   * 
   * *   **very weak**: very loose.
   * *   **weak**: loose.
   * *   **default**: normal.
   * *   **hard**: strict.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      globalMode: 'GlobalMode',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalMode: 'string',
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

