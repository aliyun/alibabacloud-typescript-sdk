// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorksBloodRelationshipResponseBodyResultQueryParams } from "./QueryWorksBloodRelationshipResponseBodyResultQueryParams";


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

