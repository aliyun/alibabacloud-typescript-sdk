// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransformAction } from "./TransformAction";
import { FilterSetting } from "./FilterSetting";


export class TransformerForView extends $dara.Model {
  actions?: TransformAction[];
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  quitAfterMatch?: boolean;
  sortId?: number;
  transformerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transformerName?: string;
  updateTime?: string;
  userId?: string;
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

