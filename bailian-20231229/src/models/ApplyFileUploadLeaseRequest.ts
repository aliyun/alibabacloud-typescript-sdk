// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFileUploadLeaseRequest extends $dara.Model {
  /**
   * @remarks
   * The category type. If this parameter is not specified, the default value is UNSTRUCTURED. Valid values:
   * 
   * UNSTRUCTURED: category for building [knowledge base](https://help.aliyun.com/document_detail/2807740.html) scenarios.
   * <props="china">
   * SESSION_FILE: upload files for agent application [conversational interactions](https://help.aliyun.com/zh/model-studio/user-guide/file-interaction).
   * 
   * 
   * > To create a new data table and upload data, use the Alibaba Cloud Model Studio console. This is not supported through the API.
   * >
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * When uploading files for building a [knowledge base](https://help.aliyun.com/document_detail/2807740.html):
   * - This field represents the name of the uploaded file. The file name must include the file format extension. Supported formats:
   *      - Documents (less than 150 MB): doc, docx, wps, ppt, pptx, xls, xlsx, md, txt, pdf, epub, mobi.
   *      - Spreadsheets (recommended within 10 MB and 100,000 rows): xls, xlsx.
   *      - Plain text (recommended not to exceed 10 MB): md, txt.
   *      - Images (less than 20 MB, shortest side > 15 px, longest side < 8192 px, aspect ratio < 50): png, jpg, jpeg, bmp, gif.
   *      - Audio: aac, amr, flac, flv, m4a, mp3, mpeg, ogg, opus, wav, webm, wma.
   *      - Video: mp4, mkv, avi, mov, wmv.
   * - The file name must be 4 to 128 characters in length. For other limits, see [Knowledge base quotas and limits](https://help.aliyun.com/document_detail/2880605.html).
   * > To create a new data table and upload data, use the Alibaba Cloud Model Studio console. This is not supported through the API.
   * >
   * <props="china">
   * When uploading files for agent application [conversational interactions](https://help.aliyun.com/zh/model-studio/user-guide/file-interaction):
   * 
   * - This field represents the name of the uploaded file. The file name must include the file format extension. Supported formats:
   *      - Documents: doc, docx, wps, ppt, pptx, xls, xlsx, md, txt, pdf, epub, mobi.
   *      - Images: png, jpg, jpeg, bmp, gif.
   *      - Audio: aac, amr, flac, flv, m4a, mp3, mpeg, ogg, opus, wav, webm, wma.
   *      - Video: mp4, mkv, avi, mov, wmv.
   * - The file name must be 4 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * XXXX产品清单.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 value of the uploaded file. The server will verify this field (currently not enabled). Please fill in the correct value.
   * 
   * This parameter is required.
   * 
   * @example
   * 19657c391f6c70bcea63c154d8606bb3
   */
  md5?: string;
  /**
   * @remarks
   * The size of the uploaded file in bytes. The server will verify this field (currently not enabled). Please fill in the correct value. Valid values: 1 B to 100 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  sizeInBytes?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * If you have enabled [Alibaba Cloud Model Studio secure storage](https://help.aliyun.com/zh/model-studio/configure-resources-in-private-network) and need to generate a lease URL that is only accessible from the Alibaba Cloud internal network in the same region, you can set this parameter to true to improve security. If this parameter is not specified, the default value is false, which generates a publicly accessible lease URL.
   * > If you have not enabled Alibaba Cloud Model Studio secure storage, or are unsure whether you are using it, do not set this parameter to true (upload will fail).
   * 
   * 
   * 
   * <props="intl">
   * 
   * If you have enabled Alibaba Cloud Model Studio secure storage and need to generate a lease URL that is only accessible from the Alibaba Cloud internal network in the same region, you can set this parameter to true to improve security. If this parameter is not specified, the default value is false, which generates a publicly accessible lease URL.
   * > If you have not enabled Alibaba Cloud Model Studio secure storage, or are unsure whether you are using it, do not set this parameter to true (upload will fail).
   * 
   * @example
   * false
   */
  useInternalEndpoint?: boolean;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      fileName: 'FileName',
      md5: 'Md5',
      sizeInBytes: 'SizeInBytes',
      useInternalEndpoint: 'UseInternalEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      fileName: 'string',
      md5: 'string',
      sizeInBytes: 'string',
      useInternalEndpoint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

