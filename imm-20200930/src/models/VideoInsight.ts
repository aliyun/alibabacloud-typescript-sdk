// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoInsight extends $dara.Model {
  /**
   * @remarks
   * Video summary.
   * 
   * @example
   * 视频中展示了两个不同场景：一个是静止的白色盘子、黑色瓶子和透明玻璃杯，另一个是手拿着标有“YEZOLU”的洗发水瓶在浴室中缓慢上移。
   * 
   * **if can be null:**
   * true
   */
  caption?: string;
  /**
   * @remarks
   * The description of the video file.
   * 
   * >  Not supported.
   * 
   * @example
   * 无。
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

