// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeUploadUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The address of the knowledge base file.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of authorized users.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      fileLocation: 'FileLocation',
      message: 'Message',
      success: 'Success',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileLocation: 'string',
      message: 'string',
      success: 'boolean',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeUploadUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListKnowledgeUploadUserResponseBodyData;
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
      data: ListKnowledgeUploadUserResponseBodyData,
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

