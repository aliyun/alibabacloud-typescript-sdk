// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioFileRequest extends $dara.Model {
  /**
   * @remarks
   * The audio resource ID, which is the unique identifier of the audio file.
   * 
   * This parameter is required.
   * 
   * @example
   * c1a06b46-302a-4c6e-928b-a43c0df485cf
   */
  audioResourceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResourceId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

