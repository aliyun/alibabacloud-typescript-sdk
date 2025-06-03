// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMPULayoutInfoListResponseBodyLayoutsLayoutPanesPanes extends $dara.Model {
  /**
   * @example
   * 0.5
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
   * 0.5
   */
  width?: number;
  /**
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @example
   * 0.5
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

