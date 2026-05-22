// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpIncomingRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration. You can call the ListHttpIncomingRequestHeaderModificationRules operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 433045006266368
   */
  configId?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 608665779308176
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

