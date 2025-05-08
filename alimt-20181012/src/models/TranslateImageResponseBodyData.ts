// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateImageResponseBodyData extends $dara.Model {
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
   * Editor Template Json String
   */
  templateJson?: string;
  static names(): { [key: string]: string } {
    return {
      finalImageUrl: 'FinalImageUrl',
      inPaintingUrl: 'InPaintingUrl',
      templateJson: 'TemplateJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalImageUrl: 'string',
      inPaintingUrl: 'string',
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

