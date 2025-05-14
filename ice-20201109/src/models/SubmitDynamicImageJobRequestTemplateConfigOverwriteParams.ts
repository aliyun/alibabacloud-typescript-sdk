// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan } from "./SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan";


export class SubmitDynamicImageJobRequestTemplateConfigOverwriteParams extends $dara.Model {
  /**
   * @remarks
   * The format of the animated image. Valid values:
   * 
   * *   **gif**
   * *   **webp**
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The frame rate. Valid values: [1,60].
   * 
   * @example
   * 15
   */
  fps?: number;
  /**
   * @remarks
   * The height of the animated image. Valid values: [128,4096].
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-rotate screen feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **true**.
   * 
   * >  If this feature is enabled, the width of the output video corresponds to the long side of the input video, which is the height of the input video in portrait mode. The height of the output video corresponds to the short side of the input video, which is the width of the input video in portrait mode.
   * 
   * @example
   * false
   */
  longShortMode?: boolean;
  /**
   * @remarks
   * The scan mode. Valid values:
   * 
   * *   **interlaced**
   * *   **progressive** This is the default value.
   * 
   * @example
   * progressive
   */
  scanMode?: string;
  /**
   * @remarks
   * The timeline parameters.
   */
  timeSpan?: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan;
  /**
   * @remarks
   * The width of the animated image. Valid values: [128,4096].
   * 
   * @example
   * 1024
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      longShortMode: 'LongShortMode',
      scanMode: 'ScanMode',
      timeSpan: 'TimeSpan',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      fps: 'number',
      height: 'number',
      longShortMode: 'boolean',
      scanMode: 'string',
      timeSpan: SubmitDynamicImageJobRequestTemplateConfigOverwriteParamsTimeSpan,
      width: 'number',
    };
  }

  validate() {
    if(this.timeSpan && typeof (this.timeSpan as any).validate === 'function') {
      (this.timeSpan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

