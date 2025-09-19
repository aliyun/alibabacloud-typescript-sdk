// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckInstanceResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * This parameter is required.
   * 
   * @example
   * 23
   */
  checkId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf64w4q6p9jti5gl****
   */
  instanceIdKey?: string;
  /**
   * @remarks
   * The instance IDs of cloud services.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * i-uf64w4q6p9jti5gl****
   */
  instanceNameKey?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
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
   * The types of the conditions based on which the check items are sorted.
   */
  sortTypes?: string[];
  /**
   * @remarks
   * The statuses of check items.
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

