// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMPULayoutRequestPanes extends $dara.Model {
  /**
   * @remarks
   * The height of the pane, represented as a normalized percentage. Valid values: **0.0 < Height ≤ 1.0**.
   * 
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @remarks
   * Specifies the major pane. Each layout can have only one major pane. Valid values:
   * - **0**: Secondary pane.
   * - **1**: Major pane.
   * 
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @remarks
   * The ID of the pane. Panes are sorted from top left to bottom right, starting from 0.
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
   * 0.2456
   */
  width?: number;
  /**
   * @remarks
   * The X-coordinate, represented as a normalized percentage. Valid values: **0.0 ≤ X ≤ 1.0**.
   * 
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @remarks
   * The Y-coordinate, represented as a normalized percentage. Valid values: **0.0 ≤ Y ≤ 1.0**.
   * 
   * @example
   * 0.7576
   */
  y?: number;
  /**
   * @remarks
   * The Z-order. A value of 0 indicates the bottom layer, 1 indicates the layer above 0, and so on.
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

export class ModifyMPULayoutRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Only a single ID is supported. You can create and query application IDs in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The maximum number of audio mixing tracks. Valid values: **0** to **6**.
   * 
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @remarks
   * The ID of the layout. For more information about how to obtain the layout ID, see [CreateMPULayout](https://help.aliyun.com/document_detail/162192.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 10117
   */
  layoutId?: number;
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
   */
  panes?: ModifyMPULayoutRequestPanes[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioMixCount: 'AudioMixCount',
      layoutId: 'LayoutId',
      name: 'Name',
      ownerId: 'OwnerId',
      panes: 'Panes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioMixCount: 'number',
      layoutId: 'number',
      name: 'string',
      ownerId: 'number',
      panes: { 'type': 'array', 'itemType': ModifyMPULayoutRequestPanes },
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

