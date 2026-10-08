// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetImageAnimations extends $dara.Model {
  /**
   * @remarks
   * Format
   * 
   * This parameter is required.
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * FrameRate
   * 
   * @example
   * 25
   */
  frameRate?: number;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 960
   */
  height?: number;
  /**
   * @remarks
   * Interval
   * 
   * @example
   * 0.5
   */
  interval?: number;
  /**
   * @remarks
   * Number
   * 
   * @example
   * 100
   */
  number?: number;
  /**
   * @remarks
   * ScaleType
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * StartTime
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * URI
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/animations
   */
  URI?: string;
  /**
   * @remarks
   * Width
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      frameRate: 'FrameRate',
      height: 'Height',
      interval: 'Interval',
      number: 'Number',
      scaleType: 'ScaleType',
      startTime: 'StartTime',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      frameRate: 'number',
      height: 'number',
      interval: 'number',
      number: 'number',
      scaleType: 'string',
      startTime: 'number',
      URI: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImageSnapshots extends $dara.Model {
  /**
   * @remarks
   * Format
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 960
   */
  height?: number;
  /**
   * @remarks
   * Interval
   * 
   * @example
   * 0.5
   */
  interval?: number;
  /**
   * @example
   * interval
   */
  mode?: string;
  /**
   * @remarks
   * Number
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * ScaleType
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * StartTime
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  threshold?: number;
  /**
   * @remarks
   * URI
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/snapshots
   */
  URI?: string;
  /**
   * @remarks
   * Width
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      height: 'Height',
      interval: 'Interval',
      mode: 'Mode',
      number: 'Number',
      scaleType: 'ScaleType',
      startTime: 'StartTime',
      threshold: 'Threshold',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      height: 'number',
      interval: 'number',
      mode: 'string',
      number: 'number',
      scaleType: 'string',
      startTime: 'number',
      threshold: 'number',
      URI: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImageSprites extends $dara.Model {
  /**
   * @remarks
   * Format
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * Interval
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * Margin
   * 
   * @example
   * 2
   */
  margin?: number;
  /**
   * @example
   * interval
   */
  mode?: string;
  /**
   * @remarks
   * Number
   * 
   * @example
   * 0
   */
  number?: number;
  /**
   * @remarks
   * Pad
   * 
   * @example
   * 2
   */
  pad?: number;
  /**
   * @remarks
   * ScaleHeight
   * 
   * @example
   * 960
   */
  scaleHeight?: number;
  /**
   * @remarks
   * ScaleType
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * ScaleWidth
   * 
   * @example
   * 1280
   */
  scaleWidth?: number;
  /**
   * @remarks
   * StartTime
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  threshold?: number;
  /**
   * @remarks
   * TileHeight
   * 
   * @example
   * 6
   */
  tileHeight?: number;
  /**
   * @remarks
   * TileWidth
   * 
   * @example
   * 6
   */
  tileWidth?: number;
  /**
   * @remarks
   * URI
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/sprites
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

export class TargetImage extends $dara.Model {
  /**
   * @remarks
   * Animations
   */
  animations?: TargetImageAnimations[];
  /**
   * @remarks
   * Snapshots
   */
  snapshots?: TargetImageSnapshots[];
  /**
   * @remarks
   * Sprites
   */
  sprites?: TargetImageSprites[];
  static names(): { [key: string]: string } {
    return {
      animations: 'Animations',
      snapshots: 'Snapshots',
      sprites: 'Sprites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animations: { 'type': 'array', 'itemType': TargetImageAnimations },
      snapshots: { 'type': 'array', 'itemType': TargetImageSnapshots },
      sprites: { 'type': 'array', 'itemType': TargetImageSprites },
    };
  }

  validate() {
    if(Array.isArray(this.animations)) {
      $dara.Model.validateArray(this.animations);
    }
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    if(Array.isArray(this.sprites)) {
      $dara.Model.validateArray(this.sprites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

