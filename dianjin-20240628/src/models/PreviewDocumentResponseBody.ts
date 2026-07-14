// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Preview type.
   * 
   * @example
   * pdf
   */
  previewType?: string;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * Upload time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  uploadTime?: string;
  /**
   * @remarks
   * Document URL.
   * 
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
   * @remarks
   * Time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: PreviewDocumentResponseBodyData;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ff551395-1c8a-4f30-8ffd-ef7e87c70b4c
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Time.
   * 
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

