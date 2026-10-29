// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForkKnowledgeFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created reference record, represented as a decimal string. Use this ID for subsequent management of the record. This parameter is returned only when the operation is successful.
   * 
   * @example
   * 456
   */
  fileId?: string;
  /**
   * @remarks
   * The address of the new reference record, in the format of fork://<source file ID>/<new file ID>. This parameter is returned only when the operation is successful.
   * 
   * @example
   * fork://123/456
   */
  fileLocation?: string;
  /**
   * @remarks
   * The description of the operation result. If the business operation fails, this parameter indicates the cause or the security error code.
   * 
   * @example
   * Fork succeeded
   */
  message?: string;
  /**
   * @remarks
   * The ID of the content host file, represented as a decimal string. Currently, this value is the same as the source file ID. This parameter is returned only when the operation is successful.
   * 
   * @example
   * 123
   */
  ownerFileId?: string;
  /**
   * @remarks
   * The status of the new reference record. The value is fixed to DUPLICATED. This parameter is returned only when the operation is successful.
   * 
   * @example
   * DUPLICATED
   */
  processStatus?: string;
  /**
   * @remarks
   * The ID of the source file, represented as a decimal string. This parameter is returned only when the operation is successful.
   * 
   * @example
   * 123
   */
  sourceFileId?: string;
  /**
   * @remarks
   * Indicates whether the business operation is successful. If the operation fails, the Data parameter contains only Success and Message.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileLocation: 'FileLocation',
      message: 'Message',
      ownerFileId: 'OwnerFileId',
      processStatus: 'ProcessStatus',
      sourceFileId: 'SourceFileId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileLocation: 'string',
      message: 'string',
      ownerFileId: 'string',
      processStatus: 'string',
      sourceFileId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForkKnowledgeFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ForkKnowledgeFileResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ForkKnowledgeFileResponseBodyData,
      requestId: 'string',
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

