// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RectVerticalRequest extends $dara.Model {
  /**
   * @example
   * 2
   */
  countDetectDoor?: number;
  /**
   * @example
   * true
   */
  detectDoor?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  subSceneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"844946777965268992":[[0.42418407210144654,0.33625107620738004,0.42620819117478337,0.635753199572695],[0.5158627587152769,0.3071978991900134,0.5177513758740194,0.6312118011104786],[0.582693212445534,0.3733969265933281,0.5807612760319687,0.6139402811250833]]}
   */
  verticalRect?: string;
  static names(): { [key: string]: string } {
    return {
      countDetectDoor: 'CountDetectDoor',
      detectDoor: 'DetectDoor',
      subSceneId: 'SubSceneId',
      verticalRect: 'VerticalRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countDetectDoor: 'number',
      detectDoor: 'boolean',
      subSceneId: 'string',
      verticalRect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

