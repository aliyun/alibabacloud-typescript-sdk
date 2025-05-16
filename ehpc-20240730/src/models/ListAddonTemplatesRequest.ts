// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The addon names.
   */
  addonNames?: string[];
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addonNames: 'AddonNames',
      clusterCategory: 'ClusterCategory',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonNames: { 'type': 'array', 'itemType': 'string' },
      clusterCategory: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addonNames)) {
      $dara.Model.validateArray(this.addonNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

