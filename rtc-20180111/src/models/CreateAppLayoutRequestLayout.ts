// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppLayoutRequestLayoutPanes } from "./CreateAppLayoutRequestLayoutPanes";


export class CreateAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 布局
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  panes?: CreateAppLayoutRequestLayoutPanes[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      panes: { 'type': 'array', 'itemType': CreateAppLayoutRequestLayoutPanes },
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

