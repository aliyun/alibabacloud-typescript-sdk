// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommandInvocationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group. Queries the command execution results under this delivery group. This parameter must be specified when AppInstanceGroupIds is not specified. If both are specified, AppInstanceGroupIds takes precedence and this parameter does not take effect.
   * 
   * @example
   * ws-0bxls9m9arax6****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The list of delivery group IDs. A maximum of 200 IDs can be specified, and all delivery groups must be in the same region. When specified, it takes precedence over AppInstanceGroupId and queries the command execution results of all persistent sessions under these delivery groups. The list cannot contain null values.
   */
  appInstanceGroupIds?: string[];
  /**
   * @remarks
   * The list of persistent session IDs. A maximum of 100 IDs can be specified. It is used to query only the command execution results of the specified persistent sessions. When AppInstanceGroupIds is specified, only persistent sessions belonging to these delivery groups are retained. If no matching persistent sessions are found, an empty list is returned.
   */
  appInstancePersistentIds?: string[];
  /**
   * @remarks
   * The command execution ID, which is the InvocationId returned when you call RunAppInstanceCommand to deliver a command.
   * 
   * This parameter is required.
   * 
   * @example
   * t-0bxls9m9ara****
   */
  invocationId?: string;
  /**
   * @remarks
   * This parameter does not take effect in the current version and does not affect the query results if passed. Use PageNumber and PageSize for pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter does not take effect in the current version and does not affect the query results if passed. Use PageNumber and PageSize for pagination.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kDw2Ml****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the query results to display. It is used together with PageSize for paging in a paged query. If not specified, the default value is 0, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page. Default value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Currently, only WuyingServer is supported. If you specify other values, a parameter error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupIds: 'AppInstanceGroupIds',
      appInstancePersistentIds: 'AppInstancePersistentIds',
      invocationId: 'InvocationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      appInstancePersistentIds: { 'type': 'array', 'itemType': 'string' },
      invocationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupIds)) {
      $dara.Model.validateArray(this.appInstanceGroupIds);
    }
    if(Array.isArray(this.appInstancePersistentIds)) {
      $dara.Model.validateArray(this.appInstancePersistentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

