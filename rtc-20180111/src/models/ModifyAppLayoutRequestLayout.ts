// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppLayoutRequestLayoutPanes } from "./ModifyAppLayoutRequestLayoutPanes";


export class ModifyAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123121231313
   */
  layoutId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  name?: string;
  panes?: ModifyAppLayoutRequestLayoutPanes[];
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
      name: 'string',
      panes: { 'type': 'array', 'itemType': ModifyAppLayoutRequestLayoutPanes },
    };
  }

  validate() {
    if(Array.isArray(this.panes)) {
      $dara.Model.validateArray(this.panes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

