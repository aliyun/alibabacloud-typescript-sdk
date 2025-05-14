// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewDocumentResponseBodyData extends $dara.Model {
  /**
   * @example
   * pdf
   */
  previewType?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  uploadTime?: string;
  /**
   * @example
   * https://agi.alicdn.com/user/d0o/d3c1f50d-a6c2-49b3-b0c8-3e613c3f20ee_16872_3236784461.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      previewType: 'previewType',
      title: 'title',
      uploadTime: 'uploadTime',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      previewType: 'string',
      title: 'string',
      uploadTime: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

