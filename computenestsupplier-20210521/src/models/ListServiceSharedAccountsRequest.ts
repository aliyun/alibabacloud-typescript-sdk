// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceSharedAccountsRequestFilter } from "./ListServiceSharedAccountsRequestFilter";


export class ListServiceSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceSharedAccountsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAR130adlM4fHHVSWpTca/t4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The permissions on the service. Valid values:
   * 
   * *   Deployable: Permissions to deploy the service.
   * *   Accessible: Permissions to access the service.
   * 
   * @example
   * Accessible
   */
  permission?: string;
  /**
   * @remarks
   * The region ID where the service instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-e10349089de34exxxxxx
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      permission: 'Permission',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceSharedAccountsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      permission: 'string',
      regionId: 'string',
      serviceId: 'string',
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

