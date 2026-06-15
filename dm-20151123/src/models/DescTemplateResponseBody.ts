// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2025-11-14T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95xxx5F
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  smsContent?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  smsType?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test1
   */
  templateName?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  templateNickName?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * - 0: The template is a draft.
   * 
   * - 1: The template is pending approval.
   * 
   * - 2: The template is approved.
   * 
   * - 3: The template is rejected.
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @remarks
   * The template subject, which is used to create the email subject.
   * 
   * @example
   * test
   */
  templateSubject?: string;
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * <p>1</p>
   */
  templateText?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for historical compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
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

