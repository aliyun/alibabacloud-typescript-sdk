// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControlCrop extends $dara.Model {
  /**
   * @remarks
   * The height of the video image after the margins are cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  height?: string;
  /**
   * @remarks
   * The left margin to be cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  left?: string;
  /**
   * @remarks
   * The cropping mode. Valid values:
   * 
   * *   **Auto**: Cropping was automatically run.
   * *   **Force**: Cropping was forced to run.
   * *   **None**: Cropping was forced not to run.
   * *   This parameter is required if the value of the Crop parameter is not an empty JSON {}.
   * 
   * @example
   * Auto
   */
  mode?: string;
  /**
   * @remarks
   * The top margin to be cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  top?: string;
  /**
   * @remarks
   * The width of the video image after the margins are cropped out.
   * 
   * >  This parameter is invalid if the Mode parameter is set to Auto or None.
   * 
   * @example
   * 8
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      mode: 'Mode',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'string',
      left: 'string',
      mode: 'string',
      top: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

