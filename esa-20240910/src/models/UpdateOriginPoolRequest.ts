// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateOriginPoolRequestOrigins } from "./UpdateOriginPoolRequestOrigins";


export class UpdateOriginPoolRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the origin pool is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
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
   * Information about the origins added to the origin pool. Multiple origins are passed as an array.
   */
  origins?: UpdateOriginPoolRequestOrigins[];
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 216558609793952
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      origins: 'Origins',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      origins: { 'type': 'array', 'itemType': UpdateOriginPoolRequestOrigins },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.origins)) {
      $dara.Model.validateArray(this.origins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

