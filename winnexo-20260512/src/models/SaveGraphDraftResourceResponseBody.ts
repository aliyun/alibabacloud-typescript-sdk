// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftResourceResponseBody extends $dara.Model {
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
   * 草稿变更 ID；内容与在线完全一致被跳过时为 null
   * 
   * @example
   * 401001
   */
  draftChangeId?: number;
  /**
   * @remarks
   * 草稿内容哈希；被跳过时为 null
   * 
   * @example
   * sha256:abc123
   */
  draftContentHash?: string;
  /**
   * @remarks
   * 资源小类：resourceType=object 时固定 object_type；resourceType=element 时为 indicator / logic / process / rule / analysis 之一
   * 
   * @example
   * object_type
   */
  elementType?: string;
  /**
   * @remarks
   * 最后修改时间（ISO8601）；被跳过时为 null
   * 
   * @example
   * 2026-09-08T10:30:00+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * 图谱名称
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * 操作类型：CREATE / UPDATE（由底层判定）；被跳过时为 null
   * 
   * @example
   * UPDATE
   */
  operationType?: string;
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
   * 资源名
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * 资源大类：object（对象）/ element（业务元素）
   * 
   * @example
   * object
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      draftChangeId: 'draftChangeId',
      draftContentHash: 'draftContentHash',
      elementType: 'elementType',
      gmtModified: 'gmtModified',
      graphName: 'graphName',
      message: 'message',
      operationType: 'operationType',
      requestId: 'requestId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      draftChangeId: 'number',
      draftContentHash: 'string',
      elementType: 'string',
      gmtModified: 'string',
      graphName: 'string',
      message: 'string',
      operationType: 'string',
      requestId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

