// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksBloodRelationshipResponseBodyResultQueryParams extends $dara.Model {
  /**
   * @remarks
   * The ID of the area.
   * 
   * @example
   * area_column
   */
  areaId?: string;
  /**
   * @remarks
   * The name of the area.
   * 
   * @example
   * Column (Measure)
   */
  areaName?: string;
  /**
   * @remarks
   * The original name of the field.
   * 
   * @example
   * order_number
   */
  caption?: string;
  /**
   * @remarks
   * The field type. Valid values:
   * 
   * - string: String type.
   * - date: Date type that includes only the year, month, and day.
   * - datetime: General date type.
   * - time: Time type that includes only the hour, minute, and second.
   * - number: Numeric type.
   * - boolean: Boolean type.
   * - geographic: Geographic location.
   * - url: URL string type.
   * - imageUrl: Image URL type.
   * - multivalue: Multi-value column.
   * 
   * @example
   * number
   */
  dataType?: string;
  /**
   * @remarks
   * The expression of the calculated field.
   * 
   * @example
   * BI_DATEADD([Time], 100, \\"day\\")
   */
  expression?: string;
  /**
   * @remarks
   * Indicates whether the field is a measure. Valid values:
   * 
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  isMeasure?: boolean;
  /**
   * @remarks
   * The globally unique PathId.
   * 
   * @example
   * schema7d1944eb-443e-48c6-8123-bf45a99e7e74.dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record.[Ndc78a4_order_level].[Ndc78a4_order_level].[Ndc78a4_order_level]
   */
  pathId?: string;
  /**
   * @remarks
   * The unique ID of the field.
   * 
   * @example
   * Ndc78a4_order_number
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
      caption: 'Caption',
      dataType: 'DataType',
      expression: 'Expression',
      isMeasure: 'IsMeasure',
      pathId: 'PathId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      areaName: 'string',
      caption: 'string',
      dataType: 'string',
      expression: 'string',
      isMeasure: 'boolean',
      pathId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * Line chart
   */
  componentName?: string;
  /**
   * @remarks
   * The component type.
   * 
   * @example
   * 3
   */
  componentType?: number;
  /**
   * @remarks
   * The Chinese name of the component type.
   * 
   * @example
   * Cross table
   */
  componentTypeCnName?: string;
  /**
   * @remarks
   * The component type name.
   * 
   * @example
   * LINE
   */
  componentTypeName?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record
   */
  datasetId?: string;
  /**
   * @remarks
   * The list of columns referenced by query parameters.
   */
  queryParams?: QueryWorksBloodRelationshipResponseBodyResultQueryParams[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentName: 'ComponentName',
      componentType: 'ComponentType',
      componentTypeCnName: 'ComponentTypeCnName',
      componentTypeName: 'ComponentTypeName',
      datasetId: 'DatasetId',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentName: 'string',
      componentType: 'number',
      componentTypeCnName: 'string',
      componentTypeName: 'string',
      datasetId: 'string',
      queryParams: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResultQueryParams },
    };
  }

  validate() {
    if(Array.isArray(this.queryParams)) {
      $dara.Model.validateArray(this.queryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksBloodRelationshipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The list of data work lineage information.
   */
  result?: QueryWorksBloodRelationshipResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryWorksBloodRelationshipResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

