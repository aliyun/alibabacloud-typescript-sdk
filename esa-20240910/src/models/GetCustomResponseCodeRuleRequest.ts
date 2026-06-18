// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomResponseCodeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 424022244554752
   */
  configId?: number;
  /**
   * @remarks
   * Site ID. For more information, see [ListSites](https://help.aliyun.com/document_detail/2850189.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 775724064754208
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

