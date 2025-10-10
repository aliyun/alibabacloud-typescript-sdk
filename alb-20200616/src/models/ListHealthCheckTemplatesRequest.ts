// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHealthCheckTemplatesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * product
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListHealthCheckTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of health check templates.
   */
  healthCheckTemplateIds?: string[];
  /**
   * @remarks
   * The health check templates.
   */
  healthCheckTemplateNames?: string[];
  /**
   * @remarks
   * The number of entries to return in each call. Valid values: **1** to **100**. Default value: **20**
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID. You can filter the query results based on the specified ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListHealthCheckTemplatesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplateIds: 'HealthCheckTemplateIds',
      healthCheckTemplateNames: 'HealthCheckTemplateNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplateIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckTemplateNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListHealthCheckTemplatesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckTemplateIds)) {
      $dara.Model.validateArray(this.healthCheckTemplateIds);
    }
    if(Array.isArray(this.healthCheckTemplateNames)) {
      $dara.Model.validateArray(this.healthCheckTemplateNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

