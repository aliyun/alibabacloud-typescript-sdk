// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInventoryRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the component property. Valid values of N: 1 to 5. Different components have different property names. You can call the [GetInventorySchema](https://api.aliyun.com/#/?product=oos\\&version=2019-06-01\\&api=GetInventorySchema) operation to query the property names of different components. For example, the ACS:InstanceInformation component has the InstanceId property. Therefore, you can set this parameter to ACS:InstanceInformation.InstanceId.
   * 
   * @example
   * ACS:InstanceInformation.InstanceId
   */
  name?: string;
  /**
   * @remarks
   * The comparison operator that is used to filter property values. Valid values of N: 1 to 5. Valid values:
   * 
   * *   Equal
   * *   NotEqual
   * *   BeginWith
   * *   LessThan
   * *   GreaterThan
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The property values to query.
   * 
   * @example
   * i-bp1cpoxxxxxxxxxxxxxx
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequest extends $dara.Model {
  /**
   * @remarks
   * The information about aggregators. You can use one or more aggregators to query the aggregate information of an instance. Valid values:
   * 
   * *   ACS:Application.Name
   * *   ACS:Application.Version
   * 
   * @example
   * ACS:Application.Name
   */
  aggregator?: string[];
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: SearchInventoryRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': SearchInventoryRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregator)) {
      $dara.Model.validateArray(this.aggregator);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

