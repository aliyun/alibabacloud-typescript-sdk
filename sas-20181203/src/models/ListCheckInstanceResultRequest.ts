// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckInstanceResultRequest extends $dara.Model {
  /**
   * @remarks
   * The check item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23
   */
  checkId?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query. This parameter is used for paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the check item.
   * 
   * @example
   * i-uf64w4q6p9jti5gl****
   */
  instanceIdKey?: string;
  /**
   * @remarks
   * The collection of cloud service instance IDs to query.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The instance name of the check item.
   * 
   * @example
   * i-uf64w4q6p9jti5gl****
   */
  instanceNameKey?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Maximum value: 100. This parameter is used for paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-qingdao
   */
  regionIdKey?: string;
  /**
   * @remarks
   * The list of sort types for the check item.
   */
  sortTypes?: string[];
  /**
   * @remarks
   * The collection of check item statuses.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      currentPage: 'CurrentPage',
      instanceIdKey: 'InstanceIdKey',
      instanceIds: 'InstanceIds',
      instanceNameKey: 'InstanceNameKey',
      lang: 'Lang',
      pageSize: 'PageSize',
      regionIdKey: 'RegionIdKey',
      sortTypes: 'SortTypes',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      currentPage: 'number',
      instanceIdKey: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceNameKey: 'string',
      lang: 'string',
      pageSize: 'number',
      regionIdKey: 'string',
      sortTypes: { 'type': 'array', 'itemType': 'string' },
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.sortTypes)) {
      $dara.Model.validateArray(this.sortTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

