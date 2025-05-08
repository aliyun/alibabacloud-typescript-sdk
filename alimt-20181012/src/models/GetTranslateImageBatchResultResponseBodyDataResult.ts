// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslateImageBatchResultResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://example.com/example.jpg
   */
  finalImageUrl?: string;
  /**
   * @example
   * https://example.com/example.jpg
   */
  inPaintingUrl?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * https://example.com/example.jpg
   */
  sourceImageUrl?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * {"TemplateJson": "Editor Template Json String	"}
   */
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      message: 'Message',
      sourceImageUrl: 'SourceImageUrl',
      success: 'Success',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
      message: 'string',
      sourceImageUrl: 'string',
      success: 'boolean',
      templateJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

