// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectAttachmentsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Mzc4NDAtODQ3MjY4MzI=
   */
  attachmentToken?: string;
  /**
   * @example
   * File
   */
  attachmentType?: string;
  content?: string;
  /**
   * @example
   * http://delivery-center.oss-cn-shanghai.aliyuncs.com/6a8****0e2/e0a***f3.jpg?Expires=1589334682&OSSAccessKeyId=wI2r*********&Signature=JWB39pUxs7RCqrcw58qXPEGu6M0%3D
   */
  fileLink?: string;
  /**
   * @example
   * 1589334682404
   */
  fileLinkGmtExpired?: number;
  /**
   * @example
   * f8-test-perview.jpeg
   */
  fileName?: string;
  /**
   * @example
   * 109124
   */
  fileSize?: number;
  /**
   * @example
   * jpg
   */
  fileSuffix?: string;
  /**
   * @example
   * 1587968858000
   */
  gmtCreate?: number;
  /**
   * @example
   * 8472
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * 45261111****
   */
  operator?: number;
  operatorName?: string;
  /**
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @example
   * 3
   */
  stepNo?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentToken: 'AttachmentToken',
      attachmentType: 'AttachmentType',
      content: 'Content',
      fileLink: 'FileLink',
      fileLinkGmtExpired: 'FileLinkGmtExpired',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSuffix: 'FileSuffix',
      gmtCreate: 'GmtCreate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
      stepNo: 'StepNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentToken: 'string',
      attachmentType: 'string',
      content: 'string',
      fileLink: 'string',
      fileLinkGmtExpired: 'number',
      fileName: 'string',
      fileSize: 'number',
      fileSuffix: 'string',
      gmtCreate: 'number',
      nodeId: 'number',
      nodeName: 'string',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
      stepNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponseBody extends $dara.Model {
  /**
   * @example
   * e03a9f78-7b40-4fb3-a015-350913e37e3f
   */
  requestId?: string;
  result?: DescribeProjectAttachmentsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectAttachmentsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

