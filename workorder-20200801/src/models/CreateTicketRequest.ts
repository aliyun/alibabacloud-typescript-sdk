// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  commonQuestionId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  fileNameList?: string;
  language?: string;
  notifyTimeRange?: string;
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productCode?: string;
  secretContent?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      commonQuestionId: 'CommonQuestionId',
      content: 'Content',
      email: 'Email',
      fileNameList: 'FileNameList',
      language: 'Language',
      notifyTimeRange: 'NotifyTimeRange',
      phone: 'Phone',
      productCode: 'ProductCode',
      secretContent: 'SecretContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonQuestionId: 'number',
      content: 'string',
      email: 'string',
      fileNameList: 'string',
      language: 'string',
      notifyTimeRange: 'string',
      phone: 'string',
      productCode: 'string',
      secretContent: 'string',
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

