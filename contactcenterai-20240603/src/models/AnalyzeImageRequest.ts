// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeImageRequest extends $dara.Model {
  imageUrls?: string[];
  responseFormatType?: string;
  resultTypes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      imageUrls: 'imageUrls',
      responseFormatType: 'responseFormatType',
      resultTypes: 'resultTypes',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      responseFormatType: 'string',
      resultTypes: { 'type': 'array', 'itemType': 'string' },
      stream: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.resultTypes)) {
      $dara.Model.validateArray(this.resultTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

