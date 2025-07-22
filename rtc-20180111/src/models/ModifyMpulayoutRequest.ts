// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMPULayoutRequestPanes extends $dara.Model {
  /**
   * @example
   * 0.2456
   */
  height?: number;
  /**
   * @example
   * 0
   */
  majorPane?: number;
  /**
   * @example
   * 0
   */
  paneId?: number;
  /**
   * @example
   * 0.2456
   */
  width?: number;
  /**
   * @example
   * 0.7576
   */
  x?: number;
  /**
   * @example
   * 0.7576
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
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @example
   * 3
   */
  audioMixCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10117
   */
  layoutId?: number;
  /**
   * @example
   * LayoutName
   */
  name?: string;
  ownerId?: number;
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

