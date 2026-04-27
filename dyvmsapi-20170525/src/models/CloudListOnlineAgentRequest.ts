// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListOnlineAgentRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席工号，指定座席工号则查询该工号座席的监控信息，可指定多个座席工号，指定多个座席工号使用英文逗号","分隔，不指定则查询所有队列监控信息，不指定则查询该账户下所有座席的监控信息
   * 
   * @example
   * 1111,1112
   */
  cnos?: string;
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
  ownerId?: number;
  /**
   * @remarks
   * 置忙原因，根据座席置忙原因过滤监控数据，可指定多个置忙原因，指定多个置忙原因使用英文逗号","分隔，不指定则默认查询所有设置状态的座席
   * 
   * @example
   * 示例值
   */
  pauseDescription?: string;
  /**
   * @remarks
   * 置忙类型，根据座席置忙类型过滤监控数据，可指定多个置忙类型，指定多个置忙类型使用英文逗号","分隔，不指定则默认查询所有设置状态的座席。<br>取值说明1普通，2休息，3 IM，4 强制
   * 
   * @example
   * 1
   */
  pauseType?: string;
  /**
   * @remarks
   * 队列号，指定队列号则查询该队列号所对应队列的监控信息，支持同时查询多个队列号对应队列的监控信息，多个队列号使用英文逗号","分隔，不指定则查询所有队列监控信息
   * 
   * @example
   * 123,124
   */
  qnos?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 坐席状态，s1:空闲，s2:置忙，s3:整理，s4:呼叫中，s5:响铃，s6通话   可传多个状态码，多个值之间以","分隔
   * 
   * @example
   * s1
   */
  stateCode?: string;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      pauseDescription: 'PauseDescription',
      pauseType: 'PauseType',
      qnos: 'Qnos',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stateCode: 'StateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      enterpriseId: 'number',
      ownerId: 'number',
      pauseDescription: 'string',
      pauseType: 'string',
      qnos: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

