// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeUploadUserResponseBodyDataSkipped extends $dara.Model {
  /**
   * @remarks
   * The reason why the user was skipped.
   * 
   * @example
   * conflicts error
   */
  reason?: string;
  /**
   * @remarks
   * The username of the authorized user.
   * 
   * @example
   * test_user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKnowledgeUploadUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The location of the knowledge base file.
   * 
   * @example
   * oss://bucketName/path/to/file.pfg
   */
  fileLocation?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The list of skipped users.
   */
  skipped?: AddKnowledgeUploadUserResponseBodyDataSkipped[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of users that were successfully added.
   * 
   * @example
   * 1
   */
  written?: number;
  static names(): { [key: string]: string } {
    return {
      fileLocation: 'FileLocation',
      message: 'Message',
      skipped: 'Skipped',
      success: 'Success',
      written: 'Written',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileLocation: 'string',
      message: 'string',
      skipped: { 'type': 'array', 'itemType': AddKnowledgeUploadUserResponseBodyDataSkipped },
      success: 'boolean',
      written: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skipped)) {
      $dara.Model.validateArray(this.skipped);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKnowledgeUploadUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: AddKnowledgeUploadUserResponseBodyData;
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
      data: AddKnowledgeUploadUserResponseBodyData,
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

