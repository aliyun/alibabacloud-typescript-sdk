// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransformAction } from "./TransformAction";
import { FilterSetting } from "./FilterSetting";


export class TransformerForModify extends $dara.Model {
  /**
   * @remarks
   * The transform operations.
   */
  actions?: TransformAction[];
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
   * The filter criteria.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Specifies whether to exit after a match is processed.
   * 
   * @example
   * true
   */
  quitAfterMatch?: boolean;
  /**
   * @remarks
   * The sort number.
   * 
   * @example
   * 1
   */
  sortId?: number;
  /**
   * @remarks
   * The name.
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

