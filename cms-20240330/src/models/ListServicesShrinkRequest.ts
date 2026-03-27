// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query, an empty value indicates the last page.
   * 
   * @example
   * 7-b81a-4bc9-bbfa-a50cc6988667
   */
  nextToken?: string;
  /**
   * @example
   * rg-aekxxzuad5zzzz
   */
  resourceGroupId?: string;
  /**
   * @example
   * app-demo
   */
  serviceName?: string;
  /**
   * @remarks
   * Service type
   * 
   * @example
   * apm
   */
  serviceType?: string;
  /**
   * **if can be null:**
   * true
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceGroupId: 'resourceGroupId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

