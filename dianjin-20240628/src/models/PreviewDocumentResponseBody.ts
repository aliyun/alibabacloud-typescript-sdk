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

export class PreviewDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * null
   */
  cost?: number;
  data?: PreviewDocumentResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * ff551395-1c8a-4f30-8ffd-ef7e87c70b4c
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: PreviewDocumentResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

