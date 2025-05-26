// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames extends $dara.Model {
  /**
   * @example
   * {"teat":"val"}
   */
  label?: string;
  /**
   * @example
   * 1
   */
  offset?: number;
  /**
   * @example
   * 10
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

