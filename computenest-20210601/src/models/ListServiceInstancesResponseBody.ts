// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstancesResponseBodyServiceInstances } from "./ListServiceInstancesResponseBodyServiceInstances";


export class ListServiceInstancesResponseBody extends $dara.Model {
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
   * A pagination token.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E50287CB-AABF-4877-92C0-289B339A1546
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the service instances.
   */
  serviceInstances?: ListServiceInstancesResponseBodyServiceInstances[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serviceInstances: 'ServiceInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serviceInstances: { 'type': 'array', 'itemType': ListServiceInstancesResponseBodyServiceInstances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstances)) {
      $dara.Model.validateArray(this.serviceInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

