// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotifyTemplatesShrinkRequest extends $dara.Model {
  alertNotifyTemplateIdsShrink?: string;
  /**
   * @example
   * 告警通知模板
   */
  alertNotifyTemplateName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GO
   */
  programLang?: string;
  /**
   * @example
   * DING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateIdsShrink: 'alertNotifyTemplateIds',
      alertNotifyTemplateName: 'alertNotifyTemplateName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      programLang: 'programLang',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateIdsShrink: 'string',
      alertNotifyTemplateName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programLang: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

