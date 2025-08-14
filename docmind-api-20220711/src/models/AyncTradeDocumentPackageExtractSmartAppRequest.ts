// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AyncTradeDocumentPackageExtractSmartAppRequest extends $dara.Model {
  customExtractionRange?: string[];
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileUrl?: string;
  option?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      customExtractionRange: 'CustomExtractionRange',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      option: 'Option',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRange: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      fileUrl: 'string',
      option: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customExtractionRange)) {
      $dara.Model.validateArray(this.customExtractionRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

