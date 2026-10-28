// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotifyTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of notification template IDs.
   */
  alertNotifyTemplateIdsShrink?: string;
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

