// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLayoutRequestLayoutPanes extends $dara.Model {
  /**
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      paneId: 'PaneId',
      width: 'Width',
      x: 'X',
      y: 'Y',
      ZOrder: 'ZOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      paneId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
      ZOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateAppLayoutRequest extends $dara.Model {
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
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  layout?: CreateAppLayoutRequestLayout;
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
      layout: CreateAppLayoutRequestLayout,
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

