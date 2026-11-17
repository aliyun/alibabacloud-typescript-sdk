// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application template IDs for batch exact matching.
   */
  applicationTemplateIds?: string[];
  /**
   * @remarks
   * The application template name for fuzzy matching.
   * 
   * @example
   * Application template
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The switch status of built-in application control for exact matching. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  builtInApplicationStatus?: string;
  /**
   * @remarks
   * The switch status of custom application rules for exact matching. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  customRuleStatus?: string;
  /**
   * @remarks
   * The description of the application template for fuzzy matching.
   * 
   * @example
   * Office network application control
   */
  description?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than or equal to 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The master switch status of the application template for exact matching. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  templateStatus?: string;
  /**
   * @remarks
   * The action for unrecognized applications for exact matching. Valid values:
   * - **Allow**: allow
   * - **Alert**: monitor
   * - **Deny**: block
   * 
   * @example
   * Alert
   */
  unknownAction?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateIds: 'ApplicationTemplateIds',
      applicationTemplateName: 'ApplicationTemplateName',
      builtInApplicationStatus: 'BuiltInApplicationStatus',
      customRuleStatus: 'CustomRuleStatus',
      description: 'Description',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      templateStatus: 'TemplateStatus',
      unknownAction: 'UnknownAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateIds: { 'type': 'array', 'itemType': 'string' },
      applicationTemplateName: 'string',
      builtInApplicationStatus: 'string',
      customRuleStatus: 'string',
      description: 'string',
      pageNo: 'number',
      pageSize: 'number',
      templateStatus: 'string',
      unknownAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationTemplateIds)) {
      $dara.Model.validateArray(this.applicationTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

