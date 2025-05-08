// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceInstanceDeployDetailsResponseBodyDeployDetails } from "./ListServiceInstanceDeployDetailsResponseBodyDeployDetails";


export class ListServiceInstanceDeployDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the service instance deployment.
   */
  deployDetails?: ListServiceInstanceDeployDetailsResponseBodyDeployDetails[];
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAW8kZY+u1sYOaYf5JmgmDQQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0036D82E-0624-5B37-B797-C460F4B02026
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployDetails: 'DeployDetails',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployDetails: { 'type': 'array', 'itemType': ListServiceInstanceDeployDetailsResponseBodyDeployDetails },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployDetails)) {
      $dara.Model.validateArray(this.deployDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

