// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesRequestTags } from "./ListInstancesRequestTags";


export class ListInstancesRequest extends $dara.Model {
  catalog?: string;
  dataSourceType?: string;
  database?: string;
  /**
   * @remarks
   * The description of the instance. You can use this description to filter instances. Fuzzy match is supported.
   * 
   * @example
   * Havenask instance
   */
  description?: string;
  /**
   * @remarks
   * The instance type. Valid values: vector: OpenSearch Vector Search Edition instance. engine: OpenSearch Retrieval Engine Edition instance.
   * 
   * @example
   * vector
   */
  edition?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ha-cn-83570439y0n
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzgpiswzbksdi
   */
  resourceGroupId?: string;
  table?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstancesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      catalog: 'catalog',
      dataSourceType: 'dataSourceType',
      database: 'database',
      description: 'description',
      edition: 'edition',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      table: 'table',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      dataSourceType: 'string',
      database: 'string',
      description: 'string',
      edition: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      table: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesRequestTags },
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

