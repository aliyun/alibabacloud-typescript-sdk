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
   * The creation time of the project.
   * 
   * @example
   * 2026-01-07T02:21:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * aliyun_183320223010****
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
   * The title of the project.
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
   * The maximum number of results returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. If more results are available, you can use this token in the next request to retrieve the next page of results. If this field is empty, all results have been returned.
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

