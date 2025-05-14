// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAudioForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the audio file passes the check. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  pass?: boolean;
  /**
   * @remarks
   * The reason returned if the audio file failed to pass the check.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      pass: 'Pass',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pass: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

