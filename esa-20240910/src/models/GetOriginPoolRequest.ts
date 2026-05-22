// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the origin pool, which can be obtained by calling the [ListOriginPools](https://help.aliyun.com/document_detail/2863947.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * The ID of the site, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 216558609793952
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

