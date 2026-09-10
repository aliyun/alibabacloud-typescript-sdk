// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTemplateListRequest extends $dara.Model {
  /**
   * @remarks
   * The validation rule type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * - 3: custom comparison.
   * - 4: full-text comparison.
   * - 5: null rate comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The field used for grouping (GROUP BY condition). Configure this parameter as needed.
   * 
   * @example
   * order_date
   */
  groupBy?: string;
  /**
   * @remarks
   * The list of validation template UUIDs. The source code of CheckTemplatePagedQry indicates that this parameter has no actual effect and does not need to be exposed externally. It is retained only for backward compatibility with legacy calls. Passing this parameter does not affect query results.
   */
  idList?: string[];
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be passed. The source code of CheckTemplatePagedQry marks this parameter with @Deprecated.
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * Specifies whether the template is built-in. Valid values:
   * - 0: No. The template is a custom template.
   * - 1: Yes. The template is a built-in template.
   * 
   * @example
   * 0
   */
  isBuiltin?: number;
  /**
   * @remarks
   * Specifies whether to return the total record count in the paginated results.
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The field used for sorting. Configure this parameter as needed.
   * 
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which specifies the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EBD0C05-6C1F-4B7A-9C3D-2A8F7E6B5C4D
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the validation template.
   * 
   * @example
   * DataVolumeValidationTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'checkType',
      groupBy: 'groupBy',
      idList: 'idList',
      isAdmin: 'isAdmin',
      isBuiltin: 'isBuiltin',
      needTotalCount: 'needTotalCount',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      templateName: 'templateName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      groupBy: 'string',
      idList: { 'type': 'array', 'itemType': 'string' },
      isAdmin: 'boolean',
      isBuiltin: 'number',
      needTotalCount: 'boolean',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

