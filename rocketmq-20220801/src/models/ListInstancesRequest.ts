// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the query. If you do not specify this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The paging number. Specifies the page of results to return.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value less than 1, the system uses 1 as the default value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the default value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging size. The maximum number of results to return on each page.
   * 
   * Valid values: 10 to 200.
   * 
   * If you set this parameter to a value less than 10, the system uses 10 as the default value. If you set this parameter to a value greater than 200, the system uses 200 as the default value.
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
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary series encoding of the instance.
   * 
   * Valid values:
   * - standard: Standard Edition.
   * - ultimate: Platinum Edition.
   * - professional: Professional Edition.
   * - dedicated: Dedicated Edition.
   * - shared: Shared Edition.
   */
  seriesCodes?: string[];
  /**
   * @remarks
   * The storage encryption key.
   * 
   * @example
   * xxxxx
   */
  storageSecretKey?: string;
  /**
   * @remarks
   * The list of resource labels that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodes: 'seriesCodes',
      storageSecretKey: 'storageSecretKey',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodes: { 'type': 'array', 'itemType': 'string' },
      storageSecretKey: 'string',
      tags: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.seriesCodes)) {
      $dara.Model.validateArray(this.seriesCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

