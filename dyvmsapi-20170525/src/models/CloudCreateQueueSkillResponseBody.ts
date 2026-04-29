// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateQueueSkillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-03-30 06:12:34
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7122600
   */
  enterpriseId?: number;
  /**
   * @remarks
   * id
   * 
   * @example
   * 54475
   */
  id?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 1000
   */
  qno?: number;
  /**
   * @remarks
   * 队列id
   * 
   * @example
   * 51937
   */
  queueId?: number;
  /**
   * @remarks
   * skill的id
   * 
   * @example
   * 48735
   */
  skillId?: number;
  /**
   * @remarks
   * 技能值
   * 
   * @example
   * 10
   */
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      qno: 'Qno',
      queueId: 'QueueId',
      skillId: 'SkillId',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enterpriseId: 'number',
      id: 'number',
      qno: 'number',
      queueId: 'number',
      skillId: 'number',
      skillLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudCreateQueueSkillResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudCreateQueueSkillResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9927CD06-C33A-50CC-A9BB-A3427967A66F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudCreateQueueSkillResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

