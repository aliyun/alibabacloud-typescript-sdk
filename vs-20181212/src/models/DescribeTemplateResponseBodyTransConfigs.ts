// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResponseBodyTransConfigs extends $dara.Model {
  /**
   * @example
   * 25
   */
  fps?: number;
  /**
   * @example
   * 50
   */
  gop?: number;
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * 399*****430-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * sd
   */
  name?: string;
  /**
   * @example
   * 800
   */
  videoBitrate?: number;
  /**
   * @example
   * h264
   */
  videoCodec?: string;
  /**
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      id: 'Id',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      id: 'string',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
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

