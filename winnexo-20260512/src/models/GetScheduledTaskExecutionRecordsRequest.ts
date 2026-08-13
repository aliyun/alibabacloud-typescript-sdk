// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * 协作群组 ID（如 cg_101）；传入时按群维度返回（调用者需为有效群成员），未传时为个人维度（排除群任务）
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 页码，从1开始
   * 
   * @example
   * exampleCollaborationGroupId
   */
  page?: number;
  /**
   * @remarks
   * 每页任务数（1~100）
   */
  pageSize?: number;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

