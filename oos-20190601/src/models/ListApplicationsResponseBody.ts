// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsResponseBodyApplications extends $dara.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Application
   */
  description?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * MyApplication
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxsn4m******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to the application.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2021-09-07T09:09:59Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the application.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12067D53-56A9-561B-ADD6-61429D207117
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

