// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectAttachmentsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The MD5 hash of the attachment.
   * 
   * @example
   * Mzc4NDAtODQ3MjY4MzI=
   */
  attachmentToken?: string;
  /**
   * @remarks
   * The type of the attachment.
   * 
   * @example
   * File
   */
  attachmentType?: string;
  /**
   * @remarks
   * The content text.
   * 
   * @example
   * None
   */
  content?: string;
  /**
   * @remarks
   * The access URL of the file.
   * 
   * @example
   * http://delivery-center.oss-cn-shanghai.aliyuncs.com/6a8****0e2/e0a***f3.jpg?Expires=1589334682&OSSAccessKeyId=wI2r*********&Signature=JWB39pUxs7RCqrcw58qXPEGu6M0%3D
   */
  fileLink?: string;
  /**
   * @remarks
   * The expiration time of the file URL (UNIX timestamp).
   * 
   * @example
   * 1589334682404
   */
  fileLinkGmtExpired?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * f8-test-perview.jpeg
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file (in bytes).
   * 
   * @example
   * 109124
   */
  fileSize?: number;
  /**
   * @remarks
   * The file name extension.
   * 
   * @example
   * jpg
   */
  fileSuffix?: string;
  /**
   * @remarks
   * The time when the attachment was uploaded (UNIX timestamp).
   * 
   * @example
   * 1587968858000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the flow node where the attachment was uploaded.
   * 
   * @example
   * 8472
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Waiting for service activation
   */
  nodeName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the operator.
   * 
   * @example
   * 45261111****
   */
  operator?: number;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * ** Technology Co., Ltd
   */
  operatorName?: string;
  /**
   * @remarks
   * The role of the operator.
   * 
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @remarks
   * The sequence number of the flow node.
   * 
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
   * @remarks
   * The ID of the request.
   * 
   * @example
   * e03a9f78-7b40-4fb3-a015-350913e37e3f
   */
  requestId?: string;
  /**
   * @remarks
   * The list of project attachments.
   */
  result?: DescribeProjectAttachmentsResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
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

