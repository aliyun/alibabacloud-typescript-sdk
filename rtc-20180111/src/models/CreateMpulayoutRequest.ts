// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMPULayoutRequestPanes extends $dara.Model {
  /**
   * @remarks
   * The height of the pane, represented as a normalized percentage. Valid values: **0.0 < Height ≤ 1.0**.
   * 
   * @example
   * 0.25
   */
  height?: number;
  /**
   * @remarks
   * Specifies the main pane. Each layout can have only one main pane.
   * 
   * - **0**: secondary pane.
   *  
   * - **1**: main pane.
   * 
   * @example
   * 1
   */
  majorPane?: number;
  /**
   * @remarks
   * The pane ID. Panes are sorted from top left to bottom right, starting from 0.
   * 
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @remarks
   * The width of the pane, represented as a normalized percentage. Valid values: **0.0 < Width ≤ 1.0**.
   * 
   * @example
   * 0.25
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate, represented as a normalized percentage. Valid values: **0.0 ≤ X ≤ 1.0**.
   * 
   * @example
   * 0.25
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, represented as a normalized percentage. Valid values: **0.0 ≤ Y ≤ 1.0**.
   * 
   * @example
   * 0.25
   */
  y?: number;
  /**
   * @remarks
   * The stacking order. A value of 0 indicates the bottom layer. A value of 1 indicates the layer above 0, and so on.
   * 
   * @example
   * 0
   */
  ZOrder?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      majorPane: 'MajorPane',
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
      majorPane: 'number',
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

export class CreateMPULayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only a single ID is supported. You can create and query application IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The maximum number of audio mixes. Valid values: **0** to **6**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @remarks
   * The name of the layout.
   * 
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The list of panes in the layout.
   * 
   * This parameter is required.
   */
  panes?: CreateMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      name: 'string',
      ownerId: 'number',
      panes: { 'type': 'array', 'itemType': CreateMPULayoutRequestPanes },
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

