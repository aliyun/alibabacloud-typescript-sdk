// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransformAction } from "./TransformAction";
import { FilterSetting } from "./FilterSetting";


export class TransformerForModify extends $dara.Model {
  /**
   * @remarks
   * 转换操作
   */
  actions?: TransformAction[];
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
   * 筛选条件
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * 匹配处理后退出
   * 
   * @example
   * true
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
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  transformerName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      description: 'description',
      filterSetting: 'filterSetting',
      quitAfterMatch: 'quitAfterMatch',
      sortId: 'sortId',
      transformerName: 'transformerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': TransformAction },
      description: 'string',
      filterSetting: FilterSetting,
      quitAfterMatch: 'boolean',
      sortId: 'number',
      transformerName: 'string',
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

