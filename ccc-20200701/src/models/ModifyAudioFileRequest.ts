// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAudioFileRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the audio file to be modified. You can specify new content for the audio file here.
   * 
   * This parameter is required.
   * 
   * @example
   * new-test-file.wav
   */
  audioFileName?: string;
  /**
   * @remarks
   * Audio resource ID, which uniquely identifies an audio file.
   * 
   * This parameter is required.
   * 
   * @example
   * acc300c4-75c9-41ba-ba5e-2a365c96c248
   */
  audioResourceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Display name of the audio file. It must be 1 to 32 characters in length. The display name cannot be changed when modifying the audio file, so you must provide the original display name here.
   * 
   * This parameter is required.
   * 
   * @example
   * 欢迎语
   */
  name?: string;
  /**
   * @remarks
   * The OSS key of the audio file to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test/new-test-file.wav
   */
  ossFileKey?: string;
  /**
   * @remarks
   * Usage of the audio file. The default value is General (used in scenarios such as IVR). Other valid values include HoldMusic (hold music during call waiting).
   * 
   * @example
   * General
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

