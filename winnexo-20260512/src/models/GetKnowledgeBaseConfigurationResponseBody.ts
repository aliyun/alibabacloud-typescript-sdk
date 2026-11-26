// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * 是否开启后续内容更新的 AI 版本摘要
   */
  changeRecordEnabled?: boolean;
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
   * 企业知识库根目录 ID
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * 错误描述，成功时为 success
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * 数字员工可见模式；历史未显式设置 ALL 的配置按 SPECIFIED 返回
   * 
   * @example
   * SPECIFIED
   */
  ooVisibilityMode?: string;
  /**
   * @remarks
   * 显式关联的数字员工名称；ALL 返回空数组，SPECIFIED 空数组表示没有关联员工
   */
  operatingObjectNames?: string[];
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changeRecordEnabled: 'changeRecordEnabled',
      code: 'code',
      directoryId: 'directoryId',
      message: 'message',
      ooVisibilityMode: 'ooVisibilityMode',
      operatingObjectNames: 'operatingObjectNames',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRecordEnabled: 'boolean',
      code: 'string',
      directoryId: 'string',
      message: 'string',
      ooVisibilityMode: 'string',
      operatingObjectNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operatingObjectNames)) {
      $dara.Model.validateArray(this.operatingObjectNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

