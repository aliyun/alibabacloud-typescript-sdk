// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputAudioVolume extends $dara.Model {
  /**
   * @remarks
   * The volume adjustment range.
   * 
   * *   Unit: decibel.
   * *   Default value: **-20**.
   * 
   * @example
   * -20
   */
  level?: string;
  /**
   * @remarks
   * The method that is used to adjust the volume. Valid values:
   * 
   * *   **auto**
   * *   **dynamic**
   * *   **linear**
   * 
   * @example
   * auto
   */
  method?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      method: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

