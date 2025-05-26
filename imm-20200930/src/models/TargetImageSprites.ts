// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetImageSprites extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  format?: string;
  interval?: number;
  margin?: number;
  mode?: string;
  number?: number;
  pad?: number;
  scaleHeight?: number;
  scaleType?: string;
  scaleWidth?: number;
  startTime?: number;
  threshold?: number;
  tileHeight?: number;
  tileWidth?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      interval: 'Interval',
      margin: 'Margin',
      mode: 'Mode',
      number: 'Number',
      pad: 'Pad',
      scaleHeight: 'ScaleHeight',
      scaleType: 'ScaleType',
      scaleWidth: 'ScaleWidth',
      startTime: 'StartTime',
      threshold: 'Threshold',
      tileHeight: 'TileHeight',
      tileWidth: 'TileWidth',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      interval: 'number',
      margin: 'number',
      mode: 'string',
      number: 'number',
      pad: 'number',
      scaleHeight: 'number',
      scaleType: 'string',
      scaleWidth: 'number',
      startTime: 'number',
      threshold: 'number',
      tileHeight: 'number',
      tileWidth: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

