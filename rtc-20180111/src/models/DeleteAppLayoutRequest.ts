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

export class DeleteAppLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  layout?: DeleteAppLayoutRequestLayout;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
      layout: 'Layout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
      layout: DeleteAppLayoutRequestLayout,
    };
  }

  validate() {
    if(this.layout && typeof (this.layout as any).validate === 'function') {
      (this.layout as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

