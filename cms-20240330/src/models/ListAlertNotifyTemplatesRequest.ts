// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotifyTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of notification template IDs.
   */
  alertNotifyTemplateIds?: string[];
  /**
   * @remarks
   * The notification template name.
   * 
   * @example
   * Alert notification template
   */
  alertNotifyTemplateName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The template locale.
   * 
   * @example
   * GO
   */
  programLang?: string;
  /**
   * @remarks
   * The type.
   * 
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

