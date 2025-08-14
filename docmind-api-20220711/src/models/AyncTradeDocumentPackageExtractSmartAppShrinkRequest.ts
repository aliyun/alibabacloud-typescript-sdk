// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AyncTradeDocumentPackageExtractSmartAppShrinkRequest extends $dara.Model {
  customExtractionRangeShrink?: string;
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
      customExtractionRangeShrink: 'CustomExtractionRange',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      option: 'Option',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionRangeShrink: 'string',
      fileName: 'string',
      fileUrl: 'string',
      option: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

