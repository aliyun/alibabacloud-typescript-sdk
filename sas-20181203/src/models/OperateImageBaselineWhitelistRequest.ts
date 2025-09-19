// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateImageBaselineWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of baseline check items.
   * 
   * This parameter is required.
   * 
   * @example
   * hc.image.checklist.identify.hc_exploit_es_linux.item
   */
  baselineItemKeyList?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * a5250ebca765dc9eb1a84b790b0e****
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
   * The operation that you want to perform on the check items. Valid values:
   * 
   * *   **add**: adds the check items to the whitelist
   * *   **del**: removes the check items from the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
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

