// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineItemListRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the baseline type.
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
   * AccessKey pair leak
   */
  baselineNameKey?: string;
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
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The types of the assets that are scanned.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The status of the baseline risk item. Valid values:
   * 
   * *   **0**: unfixed
   * *   **1**: fixed
   * *   **2**: pending verification
   * *   **3**: fixing failed
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The UUIDs of images.
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

