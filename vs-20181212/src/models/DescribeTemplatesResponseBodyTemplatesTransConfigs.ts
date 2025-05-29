// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyTemplatesTransConfigs extends $dara.Model {
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
  /**
   * @example
   * 399788187729597430-cn-qingdao
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fps: 'Fps',
      gop: 'Gop',
      height: 'Height',
      name: 'Name',
      videoBitrate: 'VideoBitrate',
      videoCodec: 'VideoCodec',
      width: 'Width',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      gop: 'number',
      height: 'number',
      name: 'string',
      videoBitrate: 'number',
      videoCodec: 'string',
      width: 'number',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

