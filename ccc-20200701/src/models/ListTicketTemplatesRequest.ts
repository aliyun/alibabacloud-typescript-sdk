// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ticket category.
   * 
   * @example
   * 43c2671b-********86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be between 1 and 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be between 1 and 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the template. Fuzzy search is supported.
   * 
   * @example
   * 模板1
   */
  searchPattern?: string;
  /**
   * @remarks
   * The status of the template.
   * 
   * - Enabled: The template is published.
   * 
   * - Disabled: The template is unpublished.
   * 
   * @example
   * Enabled
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

