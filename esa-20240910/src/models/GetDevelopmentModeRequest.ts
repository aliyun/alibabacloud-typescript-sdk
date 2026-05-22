// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDevelopmentModeRequest extends $dara.Model {
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

