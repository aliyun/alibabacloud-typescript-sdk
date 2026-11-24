// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanAdditionalListsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by match dimension. Duplicate values are not allowed. If this parameter is not specified, all match dimensions are returned.
   */
  additionalTypes?: string[];
  /**
   * @remarks
   * The operating system type for which the list takes effect. Valid values:
   * - **windows**: Windows.
   * - **macOS**: macOS.
   * 
   * This parameter is required.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * The content of the list entry. Exact match is used. This parameter is used to locate a specific list by content. Fuzzy match is not supported.
   * 
   * @example
   * .tmp
   */
  listDetail?: string;
  /**
   * @remarks
   * Filters by list entry ID. Duplicate values are not allowed. If this parameter is not specified, no filtering by list entry ID is performed.
   */
  listIds?: string[];
  /**
   * @remarks
   * Filters by list type. If this parameter is not specified, both blacklists and whitelists are returned. Valid values:
   * - **Blacklist**: Blacklist. Matched files are directly identified as virus files.
   * - **Whitelist**: Whitelist. Matched files are excluded from virus detection.
   * 
   * @example
   * Whitelist
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalTypes: 'AdditionalTypes',
      devType: 'DevType',
      listDetail: 'ListDetail',
      listIds: 'ListIds',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalTypes: { 'type': 'array', 'itemType': 'string' },
      devType: 'string',
      listDetail: 'string',
      listIds: { 'type': 'array', 'itemType': 'string' },
      listType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalTypes)) {
      $dara.Model.validateArray(this.additionalTypes);
    }
    if(Array.isArray(this.listIds)) {
      $dara.Model.validateArray(this.listIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

