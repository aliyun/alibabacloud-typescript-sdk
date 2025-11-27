// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitConvertImageToExcelJobShrinkRequest extends $dara.Model {
  enableEventCallback?: boolean;
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNamesShrink?: string;
  imageUrlsShrink?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventCallback: 'EnableEventCallback',
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNamesShrink: 'ImageNames',
      imageUrlsShrink: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventCallback: 'boolean',
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNamesShrink: 'string',
      imageUrlsShrink: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

