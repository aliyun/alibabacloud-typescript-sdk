// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransformAction } from "./TransformAction";
import { FilterSetting } from "./FilterSetting";


export class TransformerForView extends $dara.Model {
  /**
   * @remarks
   * The transform operations.
   */
  actions?: TransformAction[];
  /**
   * @remarks
   * The time when the converter was created.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the converter is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The filter settings.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Indicates whether to exit after a match is processed.
   * 
   * @example
   * false
   */
  quitAfterMatch?: boolean;
  /**
   * @remarks
   * The sort ID.
   * 
   * @example
   * 1
   */
  sortId?: number;
  /**
   * @remarks
   * The transformer ID.
   * 
   * @example
   * 1123123123123
   */
  transformerId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试处理流
   */
  transformerName?: string;
  /**
   * @remarks
   * The time when the converter was last updated.
   * 
   * @example
   * 2025-01-16T02:27:01Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123123123**
   */
  userId?: string;
  /**
   * @remarks
   * The workspace.
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

