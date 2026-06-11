// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * evn
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return for this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If this parameter is empty, it means you have reached the last page.
   * 
   * @example
   * 7-b81a-4bc9-bbfa-a50cc6988667
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekxxzuad5zzzz
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The application service name.
   * 
   * @example
   * app-demo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * TRACE
   */
  serviceType?: string;
  /**
   * @remarks
   * An array of tags.
   * 
   * **if can be null:**
   * true
   */
  tags?: ListServicesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceGroupId: 'resourceGroupId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': ListServicesRequestTags },
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

