// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The binding status. Valid values: BOUND (bound) and UNBOUND (unbound global skills). Must be specified together with operatingObjectName.
   * 
   * @example
   * BOUND
   */
  bindStatus?: string;
  /**
   * @remarks
   * The filter expression type.
   * 
   * - SQL: SQL-based filtering.
   * - TAG: Tag-based filtering.
   * 
   * @example
   * ALL
   */
  filterType?: string;
  /**
   * @remarks
   * The search keyword. Supports fuzzy search by API name or exact search by API ID.
   * 
   * @example
   * SampleKeyword
   */
  keyword?: string;
  /**
   * @remarks
   * The digital employee name. Used to calculate the CodeAgent allowedSkills whitelist based on binding relationships.
   * 
   * @example
   * 11111
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * string_value
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag filtering parameter.
   * 
   * @example
   * string_value
   */
  tags?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bindStatus: 'bindStatus',
      filterType: 'filterType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      tags: 'tags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindStatus: 'string',
      filterType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

