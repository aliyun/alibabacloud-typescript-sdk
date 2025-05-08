// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceTestTasksRequestFilter } from "./ListServiceTestTasksRequestFilter";


export class ListServiceTestTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceTestTasksRequestFilter[];
  /**
   * @remarks
   * Number of items per page in a paginated query. The maximum is 100, and the default is 20.
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
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
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
   * service-062ae8e13b394dd5b63c
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceTestTasksRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceId: 'string',
      serviceVersion: 'string',
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

