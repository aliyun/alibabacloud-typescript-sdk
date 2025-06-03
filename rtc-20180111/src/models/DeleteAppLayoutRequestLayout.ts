// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 167466539798442****
   */
  layoutId?: string;
  static names(): { [key: string]: string } {
    return {
      layoutId: 'LayoutId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layoutId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

