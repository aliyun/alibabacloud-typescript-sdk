// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDigitalDocStructureJobRequest extends $dara.Model {
  /**
   * @example
   * docStructure.pdf
   */
  fileName?: string;
  /**
   * @example
   * pdf
   */
  fileNameExtension?: string;
  /**
   * @example
   * https://gw.alipayobjects.com/os/basement_prod/598b9edf-5287-4065-9e36-464305c60698.pdf
   */
  fileUrl?: string;
  imageStrategy?: string;
  ossBucket?: string;
  ossEndpoint?: string;
  revealMarkdown?: boolean;
  useUrlResponseBody?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileNameExtension: 'FileNameExtension',
      fileUrl: 'FileUrl',
      imageStrategy: 'ImageStrategy',
      ossBucket: 'OssBucket',
      ossEndpoint: 'OssEndpoint',
      revealMarkdown: 'RevealMarkdown',
      useUrlResponseBody: 'UseUrlResponseBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileNameExtension: 'string',
      fileUrl: 'string',
      imageStrategy: 'string',
      ossBucket: 'string',
      ossEndpoint: 'string',
      revealMarkdown: 'boolean',
      useUrlResponseBody: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

