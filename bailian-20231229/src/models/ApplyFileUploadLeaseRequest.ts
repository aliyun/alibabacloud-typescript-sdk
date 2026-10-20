// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFileUploadLeaseRequest extends $dara.Model {
  /**
   * @remarks
   * The category type. If this parameter is not specified, the default value is UNSTRUCTURED. Valid values:
   * 
   * UNSTRUCTURED: category, used for building [knowledge base](https://help.aliyun.com/document_detail/2807740.html) scenarios.
   * <props="china">
   * SESSION_FILE: upload a file for agent application [session interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction).
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
   * When uploading a file for building a [knowledge base](https://help.aliyun.com/document_detail/2807740.html):
   * - This parameter specifies the name of the file to upload. The file name extension must match the file format. Supported formats:
   *      - Documents (less than 150 MB): doc, docx, wps, ppt, pptx, xls, xlsx, md, txt, pdf, epub, mobi.
   *      - Spreadsheets (10 MB or less recommended, 100,000 rows or less): xls, xlsx.
   *      - Plain text (10 MB or less recommended): md, txt.
   *      - Images (less than 20 MB, shortest side > 15 px, longest side < 8192 px, aspect ratio < 50): png, jpg, jpeg, bmp, gif.
   *      - Audio: aac, amr, flac, flv, m4a, mp3, mpeg, ogg, opus, wav, webm, wma.
   *      - Video: mp4, mkv, avi, mov, wmv.
   * - The file name must be 4 to 128 characters in length. For other limits, see [Knowledge base quotas and limits](https://help.aliyun.com/document_detail/2880605.html).
   * > To create a new data table and upload data, use the Alibaba Cloud Model Studio console. This is not supported through the API.
   * >
   * <props="china">
   * When uploading a file for agent application [session interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction):
   * 
   * - This parameter specifies the name of the file to upload. The file name extension must match the file format. Supported formats:
   *      - Documents: doc, docx, wps, ppt, pptx, xls, xlsx, md, txt, pdf, epub, mobi.
   *      - Images: png, jpg, jpeg, bmp, gif.
   *      - Audio: aac, amr, flac, flv, m4a, mp3, mpeg, ogg, opus, wav, webm, wma.
   *      - Video: mp4, mkv, avi, mov, wmv.
   * - The file name must be 4 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ProductList.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 value of the file to upload. The server validates this parameter (validation is not currently enabled). Specify the correct value.
   * 
   * This parameter is required.
   * 
   * @example
   * 19657c391f6c70bcea63c154d8606bb3
   */
  md5?: string;
  /**
   * @remarks
   * The size of the file to upload, in bytes. The server validates this parameter (validation is not currently enabled). Specify the correct value. Valid values: 1 B to 100 MB.
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
   * If you use [Alibaba Cloud Model Studio secure storage](https://www.alibabacloud.com/help/en/model-studio/configure-resources-in-private-network) and need to generate a lease URL accessible only from the Alibaba Cloud internal network in the same region, set this parameter to true for improved security. If this parameter is not specified, the default value is false, which generates a publicly accessible lease URL.
   * > If you have not activated Alibaba Cloud Model Studio secure storage, or are unsure whether you are using it, do not set this parameter to true (the upload will fail).
   * 
   * 
   * 
   * <props="intl">
   * 
   * If you use Alibaba Cloud Model Studio secure storage and need to generate a lease URL accessible only from the Alibaba Cloud internal network in the same region, set this parameter to true for improved security. If this parameter is not specified, the default value is false, which generates a publicly accessible lease URL.
   * > If you have not activated Alibaba Cloud Model Studio secure storage, or are unsure whether you are using it, do not set this parameter to true (the upload will fail).
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

