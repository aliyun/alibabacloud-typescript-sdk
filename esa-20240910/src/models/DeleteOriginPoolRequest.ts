// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the origin address pool, which can be obtained by calling the [ListOriginPools](https://help.aliyun.com/document_detail/2863947.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 103852052519****
   */
  id?: number;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 21655860979****
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

