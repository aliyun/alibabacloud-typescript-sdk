// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class MaintainWindowForViewEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * 生效天(周一到周日)
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * 结束时间(分钟数)
   * 
   * @example
   * 360
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * 开始时间(分钟数)
   * 
   * @example
   * 60
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * +08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dayInWeek: 'dayInWeek',
      endTimeInMinute: 'endTimeInMinute',
      startTimeInMinute: 'startTimeInMinute',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayInWeek: { 'type': 'array', 'itemType': 'number' },
      endTimeInMinute: 'number',
      startTimeInMinute: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayInWeek)) {
      $dara.Model.validateArray(this.dayInWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintainWindowForView extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 生效时间范围
   */
  effectTimeRange?: MaintainWindowForViewEffectTimeRange;
  /**
   * @remarks
   * Crontab 表达式
   * 
   * @example
   * * * 14-18 ? * *
   */
  effective?: string;
  /**
   * @remarks
   * 是否启用
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * 生效结束时间
   * 
   * @example
   * 2024-11-26 12:02:01
   */
  endTime?: string;
  /**
   * @remarks
   * 筛选条件
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * UUID
   * 
   * @example
   * 123-12-312-31-23123
   */
  maintainWindowId?: string;
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * 测试策略
   */
  maintainWindowName?: string;
  /**
   * @remarks
   * 生效开始时间
   * 
   * @example
   * 2024-11-26 10:02:01
   */
  startTime?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2025-05-07T02:19:05Z
   */
  updateTime?: string;
  /**
   * @remarks
   * 用户id
   * 
   * @example
   * 12312312***
   */
  userId?: string;
  /**
   * @remarks
   * workspace
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      effectTimeRange: 'effectTimeRange',
      effective: 'effective',
      enable: 'enable',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowId: 'maintainWindowId',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      effectTimeRange: MaintainWindowForViewEffectTimeRange,
      effective: 'string',
      enable: 'boolean',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowId: 'string',
      maintainWindowName: 'string',
      startTime: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

