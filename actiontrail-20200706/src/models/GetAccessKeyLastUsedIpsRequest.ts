// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LTAI****************
   */
  accessKey?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The Alibaba Cloud service. For more information about the Alibaba Cloud services supported by ActionTrail, see [Services that work with ActionTrail](https://help.aliyun.com/document_detail/28829.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      nextToken: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

