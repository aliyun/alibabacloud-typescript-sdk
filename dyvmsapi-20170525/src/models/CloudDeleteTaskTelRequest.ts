// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudDeleteTaskTelRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 批次Id
   * 
   * @example
   * 1
   */
  fileId?: number;
  /**
   * @remarks
   * 批次名称；按照名称删除会删除最近添加的批次
   * 
   * @example
   * test_1
   */
  fileName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 号码状态；0:未呼叫 1:已呼叫
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * 任务Id
   * 
   * This parameter is required.
   * 
   * @example
   * 35
   */
  taskId?: number;
  /**
   * @remarks
   * 电话号码；支持多个，多个号码用英文逗号","分隔；任务在运行中，号码也会被删除，最多支持10W个号码；支持加密号码删除，加密号码传参时需URL Encode
   * 
   * @example
   * 18360957135
   */
  tels?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      fileId: 'FileId',
      fileName: 'FileName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
      tels: 'Tels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      fileId: 'number',
      fileName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
      taskId: 'number',
      tels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

