// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppLayoutRequestLayoutPanes extends $dara.Model {
  /**
   * @remarks
   * Pane height, normalized percentage. Height ranges from 0.0\<Height≤1.0.
   * 
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * Pane ID, starting from 0.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * Pane width, normalized percentage. Width ranges from 0.0\<Width≤1.0.
   * 
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @remarks
   * X coordinate, normalized percentage. The X coordinate ranges from 0.0 to 1.0.
   * 
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate, normalized percentage. The Y coordinate ranges from 0.0 to 1.0.
   * 
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @remarks
   * Stacking order. 0 is the bottom layer, 1 is above 0, and so on.
   * 
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

export class ModifyAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * Layout ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123121231313
   */
  layoutId?: string;
  /**
   * @remarks
   * Layout name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * List of panes.
   */
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

export class ModifyAppLayoutRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID. Create and query through the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * Idempotent parameter.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Layout.
   * 
   * This parameter is required.
   */
  layout?: ModifyAppLayoutRequestLayout;
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
      layout: ModifyAppLayoutRequestLayout,
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

