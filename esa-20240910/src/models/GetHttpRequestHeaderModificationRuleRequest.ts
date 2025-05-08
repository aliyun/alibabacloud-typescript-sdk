// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. It can be obtained by calling the [ListHttpRequestHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
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

