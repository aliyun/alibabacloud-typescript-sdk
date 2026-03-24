// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentContactStruct } from "./IncidentContactStruct";


export class IncidentEscalationStageStruct extends $dara.Model {
  /**
   * @remarks
   * 联系人列表
   */
  contact?: IncidentContactStruct[];
  /**
   * @remarks
   * 周期通知统计次数
   * 
   * @example
   * 3
   */
  cycleNotifyCount?: number;
  /**
   * @remarks
   * 周期通知时间
   * 
   * @example
   * 300
   */
  cycleNotifyTime?: number;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 负责处理生产环境告警的主负责人
   */
  description?: string;
  /**
   * @remarks
   * 有效时间
   * 
   * @example
   * 2025-04-05T00:00:00Z
   */
  effectTime?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * 运维团队
   */
  name?: string;
  /**
   * @remarks
   * 阶段指数
   * 
   * @example
   * 1
   */
  stageIndex?: number;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * 等待进入下一阶段的时间
   * 
   * @example
   * 600
   */
  waitToNextStageTime?: number;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      cycleNotifyCount: 'cycleNotifyCount',
      cycleNotifyTime: 'cycleNotifyTime',
      description: 'description',
      effectTime: 'effectTime',
      name: 'name',
      stageIndex: 'stageIndex',
      timeZone: 'timeZone',
      waitToNextStageTime: 'waitToNextStageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': IncidentContactStruct },
      cycleNotifyCount: 'number',
      cycleNotifyTime: 'number',
      description: 'string',
      effectTime: 'string',
      name: 'string',
      stageIndex: 'number',
      timeZone: 'string',
      waitToNextStageTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

