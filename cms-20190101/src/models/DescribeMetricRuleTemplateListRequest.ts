// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the history of applying the alert templates to application groups. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  history?: boolean;
  /**
   * @remarks
   * The keyword of the alert template name.
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
   * The sorting order. Valid values:
   * 
   * *   true (default): ascending order
   * *   false: descending order
   * 
   * @example
   * true
   */
  order?: boolean;
  /**
   * @remarks
   * The sorting basis. Valid values:
   * 
   * *   gmtMotified: sorts alert templates by modification time
   * *   gmtCreate (default): sorts alert templates by creation time
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
   * The number of entries per page.
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

