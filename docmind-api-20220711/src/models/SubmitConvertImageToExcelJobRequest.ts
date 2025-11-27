// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitConvertImageToExcelJobRequest extends $dara.Model {
  enableEventCallback?: boolean;
  forceMergeExcel?: boolean;
  /**
   * @example
   * jpg
   */
  imageNameExtension?: string;
  imageNames?: string[];
  imageUrls?: string[];
  ossBucket?: string;
  ossEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventCallback: 'EnableEventCallback',
      forceMergeExcel: 'ForceMergeExcel',
      imageNameExtension: 'ImageNameExtension',
      imageNames: 'ImageNames',
      imageUrls: 'ImageUrls',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventCallback: 'boolean',
      forceMergeExcel: 'boolean',
      imageNameExtension: 'string',
      imageNames: { 'type': 'array', 'itemType': 'string' },
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      ossBucket: 'string',
      ossEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageNames)) {
      $dara.Model.validateArray(this.imageNames);
    }
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

