// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the [ListHttpRequestHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3528160969****
   */
  configId?: number;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
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

