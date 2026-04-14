// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  remark?: string;
  /**
   * @example
   * 95xxx5F
   */
  requestId?: string;
  smsContent?: string;
  smsType?: string;
  /**
   * @example
   * test1
   */
  templateName?: string;
  templateNickName?: string;
  /**
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @example
   * test
   */
  templateSubject?: string;
  /**
   * @example
   * <p>1</p>
   */
  templateText?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      remark: 'Remark',
      requestId: 'RequestId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateStatus: 'TemplateStatus',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      remark: 'string',
      requestId: 'string',
      smsContent: 'string',
      smsType: 'string',
      templateName: 'string',
      templateNickName: 'string',
      templateStatus: 'string',
      templateSubject: 'string',
      templateText: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

