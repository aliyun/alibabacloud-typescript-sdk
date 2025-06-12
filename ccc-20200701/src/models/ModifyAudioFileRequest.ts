// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAudioFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * new-test-file.wav
   */
  audioFileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acc300c4-75c9-41ba-ba5e-2a365c96c248
   */
  audioResourceId?: string;
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
   * ccc-test/new-test-file.wav
   */
  ossFileKey?: string;
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

