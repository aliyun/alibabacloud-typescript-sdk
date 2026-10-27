// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotifyTemplatesRequest extends $dara.Model {
  alertNotifyTemplateIds?: string[];
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
      alertNotifyTemplateIds: 'alertNotifyTemplateIds',
      alertNotifyTemplateName: 'alertNotifyTemplateName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      programLang: 'programLang',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateIds: { 'type': 'array', 'itemType': 'string' },
      alertNotifyTemplateName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      programLang: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertNotifyTemplateIds)) {
      $dara.Model.validateArray(this.alertNotifyTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

