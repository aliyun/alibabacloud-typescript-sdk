// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAudioFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-file.wav
   */
  audioFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
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

