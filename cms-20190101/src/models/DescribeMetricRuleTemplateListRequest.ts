// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the history of applying the alert template to application groups. Valid values:
   * 
   * - true: Displays the history.
   * 
   * - false: Does not display the history. This is the default value.
   * 
   * @example
   * false
   */
  history?: boolean;
  /**
   * @remarks
   * The keyword in the alert template name.
   * 
   * @example
   * ECS
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the alert template.
   * 
   * @example
   * ECS_Template1
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - true: Ascending order. This is the default value.   
   * 
   * - false: Descending order.
   * 
   * @example
   * true
   */
  order?: boolean;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * - gmtMotified: Modification date.  
   * 
   * - gmtCreate: Creation date. This is the default value.
   * 
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert template.
   * 
   * @example
   * 70****
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      history: 'History',
      keyword: 'Keyword',
      name: 'Name',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: 'boolean',
      keyword: 'string',
      name: 'string',
      order: 'boolean',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

