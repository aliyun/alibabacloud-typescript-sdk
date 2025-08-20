// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralAnalyzeImageRequest extends $dara.Model {
  /**
   * @example
   * Analyze the content in the image
   */
  customPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrls?: string[];
  /**
   * @example
   * true
   */
  stream?: boolean;
  templateIds?: number[];
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      imageUrls: 'imageUrls',
      stream: 'stream',
      templateIds: 'templateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      stream: 'boolean',
      templateIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

