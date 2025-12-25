// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketShrinkRequest extends $dara.Model {
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
  fileNameListShrink?: string;
  /**
   * @remarks
   * Sensitive information
   */
  secretInfoShrink?: string;
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
      fileNameListShrink: 'FileNameList',
      secretInfoShrink: 'SecretInfo',
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
      fileNameListShrink: 'string',
      secretInfoShrink: 'string',
      severity: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

