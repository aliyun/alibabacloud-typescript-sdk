// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * The mode of the HTTP DDoS Attack prevention mitigation policies. Valid values:
   * - **very weak**: Extremely loose.
   * - **weak**: Loose.
   * - **default**: Normal.
   * - **hard**: Strict.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  globalMode?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
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

