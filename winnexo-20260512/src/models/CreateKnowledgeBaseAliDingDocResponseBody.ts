// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseAliDingDocResponseBody extends $dara.Model {
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
   * 绑定的目录 ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * 文档公开 URL（echo 回入参）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 创建时间 ISO8601
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 资源显示名称
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
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
   * 资源 scope，固定为 TENANT
   * 
   * @example
   * PERSONAL
   */
  scope?: string;
  /**
   * @remarks
   * 新建资源 ID
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 资源状态
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      filePublicUrl: 'filePublicUrl',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
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

