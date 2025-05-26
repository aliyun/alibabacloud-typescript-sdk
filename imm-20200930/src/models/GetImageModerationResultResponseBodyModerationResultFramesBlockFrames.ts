// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageModerationResultResponseBodyModerationResultFramesBlockFrames extends $dara.Model {
  /**
   * @remarks
   * The label of the violation.
   * 
   * @example
   * {
   *       "test": "val"
   * }
   */
  label?: string;
  /**
   * @remarks
   * The offset of the frame.
   * 
   * @example
   * 2
   */
  offset?: number;
  /**
   * @remarks
   * The confidence level of the violation.
   * 
   * @example
   * 30
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

