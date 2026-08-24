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
   * Deprecated. Retained for backward compatibility.
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
   * Deprecated. Retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  smsContent?: string;
  /**
   * @remarks
   * Deprecated. Retained for backward compatibility.
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
   * Deprecated. Retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  templateNickName?: string;
  /**
   * @remarks
   * The template status. Valid values:
   * - 0: draft.
   * - 1: pending review.
   * - 2: approved.
   * - 3: rejected.
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @remarks
   * The template subject, which is used to compose the email subject.
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
   * Deprecated. Retained for backward compatibility.
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

