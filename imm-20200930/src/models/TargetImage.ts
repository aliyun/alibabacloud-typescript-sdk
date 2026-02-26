// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetImageAnimations extends $dara.Model {
  /**
   * @remarks
   * The format of the animated image. Valid values:
   * 
   * *   gif
   * *   webp
   * 
   * This parameter is required.
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the animated image. You can use this parameter together with the Interval parameter to slow down the animation.
   * 
   * @example
   * 25
   */
  frameRate?: number;
  /**
   * @remarks
   * The height of the animated image. By default, the animated image has the same height as the source video. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the height of the target image resolution. Valid values: (0,1).
   * 
   * @example
   * 960
   */
  height?: number;
  /**
   * @remarks
   * The time interval for extracting frames. Unit: seconds.
   * 
   * @example
   * 0.5
   */
  interval?: number;
  /**
   * @remarks
   * The number of extracted frames. The default value is 0, which indicates that frames are extracted until the end of the video.
   * 
   * @example
   * 100
   */
  number?: number;
  /**
   * @remarks
   * The resizing mode. Valid values:
   * 
   * *   stretch: stretches the image to fill the entire space. This is the default value.
   * *   crop: resizes and crops the image.
   * *   fill: resizes the image and keeps the black border.
   * *   fit: resizes the image and removes the black border.
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * The start time for extracting frames. Unit: seconds. Default value: 0.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The URI of the animated image.
   * 
   * The OSS URI follows the oss://bucket/object format, where bucket is the name of the bucket in the same region as the current project and object is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/animations
   */
  URI?: string;
  /**
   * @remarks
   * The width of the animated image. By default, the animated image has the same width as the source video. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the width of the target image resolution. Valid values: (0,1).
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
   * The format of the frame. Valid values:
   * 
   * *   jpg
   * *   png
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * The height of the frame image. By default, the image has the same height as the source video. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the height of the target image resolution. Valid values: (0,1).
   * 
   * @example
   * 960
   */
  height?: number;
  /**
   * @remarks
   * The time interval of frame capturing in seconds.
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
   * The number of frames. The default value is 0, which indicates that frames are captured until the end of the video.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The resizing mode. Valid values:
   * 
   * *   stretch: stretches the image to fill the entire space. This is the default value.
   * *   crop: resizes and crops the image.
   * *   fill: resizes the image and keeps the black border.
   * *   fit: resizes the image and removes the black border.
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * The time in seconds at which frame capturing starts. The default value is 0, which indicates that frame capturing starts at the beginning of the video.
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
   * The OSS URI of the frame.
   * 
   * The OSS URI follows the oss://bucket/object format, where bucket is the name of the bucket in the same region as the current project and object is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/snapshots
   */
  URI?: string;
  /**
   * @remarks
   * The width of the frame image. By default, the image has the same width as the source video. The value of the parameter can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: [1,4096].
   * *   A decimal: the ratio relative to the width of the target image resolution. Valid values: (0,1).
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
   * The format of the sprite. Valid values:
   * 
   * *   jpg
   * *   png
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  format?: string;
  /**
   * @remarks
   * The time interval of frame capturing in seconds.
   * 
   * @example
   * 1
   */
  interval?: number;
  /**
   * @remarks
   * The margin between the small images and the edges of the sprite. Default value: 2.
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
   * The number of small images in the sprite. The default value is 0, which indicates that frames are captured until the end of the video.
   * 
   * @example
   * 0
   */
  number?: number;
  /**
   * @remarks
   * The padding between small images. Default value: 2.
   * 
   * @example
   * 2
   */
  pad?: number;
  /**
   * @remarks
   * The height of individual small images. The default value is 1. The value can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: (1,4096).
   * *   A decimal: the ratio relative to the height of the target video resolution. Valid values: (0,1].
   * 
   * @example
   * 960
   */
  scaleHeight?: number;
  /**
   * @remarks
   * The resizing mode. Valid values:
   * 
   * *   stretch: stretches the image to fill the entire space. This is the default value.
   * *   crop: resizes and crops the image.
   * *   fill: resizes the image and keeps the black border.
   * *   fit: resizes the image and removes the black border.
   * 
   * @example
   * crop
   */
  scaleType?: string;
  /**
   * @remarks
   * The width of individual small images. The default value is 1. The value can be an integer or a decimal.
   * 
   * *   An integer: the number of pixels. Valid values: (1,4096).
   * *   A decimal: the ratio relative to the width of the target video resolution. Valid values: (0,1].
   * 
   * @example
   * 1280
   */
  scaleWidth?: number;
  /**
   * @remarks
   * The time in seconds at which frame capturing starts. The default value is 0, which indicates that frame capturing starts at the beginning of the video.
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
   * The number of small images in each column. Default value: 6.
   * 
   * @example
   * 6
   */
  tileHeight?: number;
  /**
   * @remarks
   * The number of small images in each row. Default value: 6.
   * 
   * @example
   * 6
   */
  tileWidth?: number;
  /**
   * @remarks
   * The URI of the sprite in Object Storage Service (OSS).
   * 
   * The OSS URI follows the oss://bucket/object format, where bucket is the name of the bucket in the same region as the current project and object is the path of the object with the extension included.
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
   * The animated images.
   */
  animations?: TargetImageAnimations[];
  /**
   * @remarks
   * The frames.
   */
  snapshots?: TargetImageSnapshots[];
  /**
   * @remarks
   * The sprites.
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

