// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateImageBaselineWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The list of baseline sub-item keys.
   * 
   * This parameter is required.
   * 
   * @example
   * hc.image.checklist.identify.hc_exploit_es_linux.item
   */
  baselineItemKeyList?: string;
  /**
   * @remarks
   * The image UUID.
   * 
   * @example
   * a5250ebca765dc9eb1a84b790b0e****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **add**: increase.
   * - **del**: delete.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  static names(): { [key: string]: string } {
    return {
      baselineItemKeyList: 'BaselineItemKeyList',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      operation: 'Operation',
      scanRange: 'ScanRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItemKeyList: 'string',
      imageUuid: 'string',
      lang: 'string',
      operation: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

