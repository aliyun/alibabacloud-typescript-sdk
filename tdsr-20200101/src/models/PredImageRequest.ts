// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PredImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  correctVertical?: boolean;
  /**
   * @example
   * 2
   */
  countDetectDoor?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  detectDoor?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2345****
   */
  subSceneId?: string;
  static names(): { [key: string]: string } {
    return {
      correctVertical: 'CorrectVertical',
      countDetectDoor: 'CountDetectDoor',
      detectDoor: 'DetectDoor',
      subSceneId: 'SubSceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      correctVertical: 'boolean',
      countDetectDoor: 'number',
      detectDoor: 'boolean',
      subSceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

