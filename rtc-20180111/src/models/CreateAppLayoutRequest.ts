// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppLayoutRequestLayoutPanes extends $dara.Model {
  /**
   * @remarks
   * The height of the pane, represented as a normalized percentage. Valid values: 0.0 < Height ≤ 1.0.
   * 
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * The ID of the pane. The value starts from 0.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * The width of the pane, represented as a normalized percentage. Valid values: 0.0 < Width ≤ 1.0.
   * 
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @remarks
   * The X coordinate, represented as a normalized percentage. Valid values: 0.0 ≤ X ≤ 1.0.
   * 
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @remarks
   * The Y coordinate, represented as a normalized percentage. Valid values: 0.0 ≤ Y ≤ 1.0.
   * 
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @remarks
   * The Z-order of the pane. A value of 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
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

export class CreateAppLayoutRequestLayout extends $dara.Model {
  /**
   * @remarks
   * The name of the layout.
   * 
   * This parameter is required.
   * 
   * @example
   * Layout
   */
  name?: string;
  /**
   * @remarks
   * The list of panes.
   * 
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
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The layout.
   * 
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

