// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHealthCheckTemplatesResponseBodyHealthCheckTemplates } from "./ListHealthCheckTemplatesResponseBodyHealthCheckTemplates";


export class ListHealthCheckTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The health check templates.
   */
  healthCheckTemplates?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplates[];
  /**
   * @remarks
   * The number of entries returned per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplates: 'HealthCheckTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplates: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckTemplates)) {
      $dara.Model.validateArray(this.healthCheckTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

