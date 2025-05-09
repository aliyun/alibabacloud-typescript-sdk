// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInventoryEntriesRequestFilter } from "./ListInventoryEntriesRequestFilter";


export class ListInventoryEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter rules for the component.
   */
  filter?: ListInventoryEntriesRequestFilter[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1cpoxxxwxxxxxxxxxx
   */
  instanceId?: string;
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the component. Valid values:
   * 
   * *   ACS:InstanceInformation
   * *   ACS:Application
   * *   ACS:File
   * *   ACS:Network
   * *   ACS:WindowsRole
   * *   ACS:Service
   * *   ACS:WindowsRegistry
   * *   ACS:WindowsUpdate
   * 
   * This parameter is required.
   * 
   * @example
   * ACS:InstanceInformation
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListInventoryEntriesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

