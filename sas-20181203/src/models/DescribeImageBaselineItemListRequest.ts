// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineItemListRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the baseline category.
   * 
   * @example
   * ak_leak
   */
  baselineClassKey?: string;
  /**
   * @remarks
   * The key of the baseline name.
   * 
   * @example
   * Access Key泄露
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 0b5c7193300da2070220038718ad****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The scan scope collection.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The fix status of the baseline risk. Valid values:
   * - **0**: unfixed
   * - **1**: fixed
   * - **2**: pending verification
   * - **3**: fix failed.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The list of image UUIDs.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      baselineClassKey: 'BaselineClassKey',
      baselineNameKey: 'BaselineNameKey',
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      scanRange: 'ScanRange',
      status: 'Status',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassKey: 'string',
      baselineNameKey: 'string',
      currentPage: 'number',
      imageUuid: 'string',
      lang: 'string',
      pageSize: 'number',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

