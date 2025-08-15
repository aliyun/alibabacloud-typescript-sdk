// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyLastUsedEventsRequest extends $dara.Model {
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
   * The token that determines the start point of the query.
   * 
   * > The request parameters must be the same as those of the last request.
   * 
   * @example
   * eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 0 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The Alibaba Cloud service. For more information about the Alibaba Cloud services supported by ActionTrail, see [Supported Alibaba Cloud services](https://help.aliyun.com/document_detail/28829.html).
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

