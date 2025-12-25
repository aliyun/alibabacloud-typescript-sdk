// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTicketRequestSecretInfo extends $dara.Model {
  /**
   * @remarks
   * Sensitive information-text content
   * 
   * @example
   * ID:330102xxxxxx
   */
  content?: string;
  /**
   * @remarks
   * Sensitive Information-Attachment Name List
   */
  fileNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileNameList: 'FileNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileNameList)) {
      $dara.Model.validateArray(this.fileNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the problem category. You can obtain the returned value from the ListCategories operation by using the CategoryId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 7161
   */
  categoryId?: string;
  /**
   * @remarks
   * Submit the Alibaba Cloud UID of the account, which is required for the MPK virtual market scene.
   * 
   * @example
   * 1289427240739141
   */
  creatorId?: string;
  /**
   * @remarks
   * The description of the ticket. Only pure text format is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Why ECS backup failed?
   */
  description?: string;
  /**
   * @remarks
   * sdahkjdshga@qq.com
   * 
   * @example
   * 163@163.com
   */
  email?: string;
  /**
   * @remarks
   * The list of attachment names, GetAttachmentUploadUrl the ObjectKey field returned by the interface.
   */
  fileNameList?: string[];
  /**
   * @remarks
   * Sensitive information
   */
  secretInfo?: CreateTicketRequestSecretInfo;
  /**
   * @remarks
   * Enumeration value, 1 for general problem, 2 for urgent problem
   * 
   * Enumeration values:
   * 
   * *   1: regular.
   * *   2: emergency.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  severity?: number;
  /**
   * @remarks
   * The title of the ticket.
   * 
   * @example
   * Why ECS backup failed?
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      creatorId: 'CreatorId',
      description: 'Description',
      email: 'Email',
      fileNameList: 'FileNameList',
      secretInfo: 'SecretInfo',
      severity: 'Severity',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      creatorId: 'string',
      description: 'string',
      email: 'string',
      fileNameList: { 'type': 'array', 'itemType': 'string' },
      secretInfo: CreateTicketRequestSecretInfo,
      severity: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileNameList)) {
      $dara.Model.validateArray(this.fileNameList);
    }
    if(this.secretInfo && typeof (this.secretInfo as any).validate === 'function') {
      (this.secretInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

