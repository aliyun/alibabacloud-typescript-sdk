// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingKnowledgeBaseResponseBody extends $dara.Model {
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
   * 新建知识库根目录 ID
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
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
   * 知识库 URL（echo 回入参，便于调用方对齐）
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  kbUrl?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 文件名
   * 
   * @example
   * 示例名称.pdf
   */
  name?: string;
  /**
   * @remarks
   * 所属数字员工名称（echo 回入参，可为 null）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
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
   * 知识库根目录状态（创建后为 RUNNING；后台同步完成后转 READY 或 FAILED）
   * 
   * @example
   * READY
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      kbUrl: 'kbUrl',
      message: 'message',
      name: 'name',
      operatingObjectName: 'operatingObjectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      gmtCreate: 'string',
      kbUrl: 'string',
      message: 'string',
      name: 'string',
      operatingObjectName: 'string',
      requestId: 'string',
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

