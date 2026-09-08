// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAudioFileRequest extends $dara.Model {
  /**
   * @remarks
   * Audio file name, containing 1 to 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test-file.wav
   */
  audioFileName?: string;
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
   * Display name of the audio, containing 1 to 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 欢迎语
   */
  name?: string;
  /**
   * @remarks
   * Key of the OSS file, returned by the GetAudioFileUploadParameters API.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
  /**
   * @remarks
   * Usage of the audio file. The default value is General (used in scenarios such as IVR). Other optional values include HoldMusic (hold music during a call).
   * 
   * @example
   * General
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
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

