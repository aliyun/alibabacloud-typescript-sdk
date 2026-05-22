// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteAccessTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The new DNS setup of the website. Valid values:
   * 
   * *   **NS**
   * *   **CNAME**
   * 
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
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

