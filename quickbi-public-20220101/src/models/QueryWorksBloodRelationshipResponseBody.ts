// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksBloodRelationshipResponseBodyResultQueryParams extends $dara.Model {
  /**
   * @remarks
   * The ID of the owning location.
   * 
   * @example
   * area_column
   */
  areaId?: string;
  /**
   * @remarks
   * The name of the owning location.
   * 
   * @example
   * Column (Measure)
   */
  areaName?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * order_number
   */
  caption?: string;
  /**
   * @remarks
   * The type of the field. Valid values:
   * 
   * *   string: string type
   * *   date: a date type that contains only the year, month, and day parts
   * *   datetime: a common date type
   * *   time: a date type that contains only hours, minutes, and seconds.
   * *   number: numeric
   * *   boolean: Boolean type
   * *   geographical: geographical location
   * *   url: string type
   * *   imageUrl: the type of the image link.
   * *   multivalue: a multi-value column
   * 
   * @example
   * number
   */
  dataType?: string;
  /**
   * @remarks
   * Calculate field expression.
   * 
   * @example
   * BI_DATEADD([date], 100, \\"day\\")
   */
  expression?: string;
  /**
   * @remarks
   * Indices whether the metric. Valid values:
   * 
   * true false
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
   * The ID of the component that you want to modify.
   * 
   * @example
   * 0696083a-ca72-4d89-8e7a-c017910e0***
   */
  componentId?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * Line
   */
  componentName?: string;
  /**
   * @remarks
   * The type of the image component.
   * 
   * @example
   * 3
   */
  componentType?: number;
  /**
   * @remarks
   * Chinese name of the component type
   * 
   * @example
   * ddd
   */
  componentTypeCnName?: string;
  /**
   * @remarks
   * The name of the component type.
   * 
   * @example
   * LINE
   */
  componentTypeName?: string;
  /**
   * @remarks
   * The ID of the training dataset that you want to remove from the specified custom linguistic model.
   * 
   * @example
   * dc78a4ed-880d-452e-b017-90cfc10c83e5_company_sales_record
   */
  datasetId?: string;
  /**
   * @remarks
   * A list of query parameter reference columns.
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
   * The ID of the request.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * List of work blood information.
   */
  result?: QueryWorksBloodRelationshipResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
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

