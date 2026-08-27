// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupFeishuDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * dir_group_child
   */
  directoryId?: string;
  /**
   * @remarks
   * The document URL.
   * 
   * @example
   * https://example.feishu.cn/docx/doxcnExample
   */
  docUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-26T10:00:00+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * group_delivery
   */
  groupId?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Project Plan
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * GROUP
   */
  scope?: string;
  /**
   * @remarks
   * The original project ID.
   * 
   * @example
   * src_feishu_doc_1
   */
  sourceId?: string;
  /**
   * @remarks
   * The signing status. Valid values:
   * - CREATED: Created but not signed.
   * - SUCCESS: Signed successfully.
   * - STOP: Terminated.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      docUrl: 'docUrl',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
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
      docUrl: 'string',
      gmtCreate: 'string',
      groupId: 'string',
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

