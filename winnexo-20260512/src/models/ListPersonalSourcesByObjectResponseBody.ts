// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPersonalSourcesByObjectResponseBodySources extends $dara.Model {
  /**
   * @remarks
   * 资源描述，可为空
   * 
   * @example
   * user-data test user_data_test fa6c967-20260928141235
   */
  description?: string;
  /**
   * @remarks
   * 权限过滤后选择的代表目录 ID；不暴露不可读目录
   * 
   * @example
   * root
   */
  directoryId?: string;
  /**
   * @remarks
   * 资源名称
   * 
   * @example
   * openapi-personal-public-url-7vw69qzc
   */
  name?: string;
  /**
   * @remarks
   * 资源范围，固定为 PERSONAL
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * 资源 ID
   * 
   * @example
   * src-da170aem1hkj8qfor7ig
   */
  sourceId?: string;
  /**
   * @remarks
   * 资源类型，如 TEXT、FILE、ONLINE_DOC、VOICE_MEETING 等
   * 
   * @example
   * BUILTIN
   */
  sourceType?: string;
  /**
   * @remarks
   * 资源实际处理状态，如 READY、RUNNING、PENDING、FAILED 等
   * 
   * @example
   * Stopped
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      scope: 'scope',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      name: 'string',
      scope: 'string',
      sourceId: 'string',
      sourceType: 'string',
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

export class ListPersonalSourcesByObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述，成功时为 success
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 当前页资源列表；空数组表示当前页没有可见匹配资源
   */
  sources?: ListPersonalSourcesByObjectResponseBodySources[];
  /**
   * @remarks
   * 权限过滤并按 Source ID 去重后的匹配总数
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      sources: 'sources',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      sources: { 'type': 'array', 'itemType': ListPersonalSourcesByObjectResponseBodySources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

