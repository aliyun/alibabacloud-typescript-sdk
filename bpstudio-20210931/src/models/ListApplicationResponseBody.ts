// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * JIX9NEZUALGS46UI
   */
  applicationId?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2021-09-15  08:30:00
   */
  createTime?: string;
  /**
   * @remarks
   * The URL of the application architecture image.
   * 
   * @example
   * https://bp-studio-daily.oss-cn-beijing.aliyuncs.com/1411182597819805/sr-Y3KR7ZSQZR2F0YX3.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * cadt-appName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the application belongs.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application.
   * 
   * @example
   * Deployed_Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * App listing information
   */
  data?: ListApplicationResponseBodyData[];
  /**
   * @remarks
   * The interface returns information
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * 2
   */
  nextToken?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListApplicationResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

