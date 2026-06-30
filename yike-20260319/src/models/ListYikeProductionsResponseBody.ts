// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeProductionsResponseBodyProductionList extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * Manage
   */
  auth?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://tagvvcloud-material-center-prod.oss-cn-hangzhou.aliyuncs.com/sumvideo/utils_image/sumvideo-video-cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-07T02:21:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The username of the creator.
   * 
   * @example
   * aliyun_183*************
   */
  createUserName?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * Swas_QuerySwasInstanceByRegion
   */
  description?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_463862****
   */
  productionId?: string;
  /**
   * @remarks
   * The project title.
   * 
   * @example
   * Harvest
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-m3r546h1n9kq3mtm
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      description: 'Description',
      productionId: 'ProductionId',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      coverUrl: 'string',
      createTime: 'string',
      createUserName: 'string',
      description: 'string',
      productionId: 'string',
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYikeProductionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * Token
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of projects.
   */
  productionList?: ListYikeProductionsResponseBodyProductionList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productionList: 'ProductionList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productionList: { 'type': 'array', 'itemType': ListYikeProductionsResponseBodyProductionList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productionList)) {
      $dara.Model.validateArray(this.productionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

