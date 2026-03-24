// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransformAction } from "./TransformAction";
import { FilterSetting } from "./FilterSetting";


export class TransformerForView extends $dara.Model {
  /**
   * @remarks
   * 转换操作
   */
  actions?: TransformAction[];
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
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * 是否启用
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * 筛选设置
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * 匹配处理后退出
   * 
   * @example
   * false
   */
  quitAfterMatch?: boolean;
  /**
   * @remarks
   * 排序数
   * 
   * @example
   * 1
   */
  sortId?: number;
  /**
   * @remarks
   * transformer Id
   * 
   * @example
   * 1123123123123
   */
  transformerId?: string;
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * 测试处理流
   */
  transformerName?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2025-01-16T02:27:01Z
   */
  updateTime?: string;
  /**
   * @remarks
   * 用户id
   * 
   * @example
   * 123123123**
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
      actions: 'actions',
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      quitAfterMatch: 'quitAfterMatch',
      sortId: 'sortId',
      transformerId: 'transformerId',
      transformerName: 'transformerName',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': TransformAction },
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      quitAfterMatch: 'boolean',
      sortId: 'number',
      transformerId: 'string',
      transformerName: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
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

