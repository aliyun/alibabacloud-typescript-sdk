// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListQueueSkillResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * queueSkill关系表中id
   * 
   * @example
   * 93
   */
  id?: number;
  /**
   * @remarks
   * 队列号
   * 
   * @example
   * 26
   */
  qno?: number;
  /**
   * @remarks
   * 队列id
   * 
   * @example
   * 33
   */
  queueId?: number;
  /**
   * @remarks
   * skill的id
   * 
   * @example
   * 44
   */
  skillId?: number;
  /**
   * @remarks
   * 技能值
   * 
   * @example
   * 5
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

export class CloudListQueueSkillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回数据
   */
  list?: CloudListQueueSkillResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListQueueSkillResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListQueueSkillResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListQueueSkillResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudListQueueSkillResponseBodyData,
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

