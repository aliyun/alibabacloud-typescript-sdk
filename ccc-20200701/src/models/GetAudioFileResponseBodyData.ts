// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioFileResponseBodyData extends $dara.Model {
  /**
   * @example
   * test-file.wav
   */
  audioFileName?: string;
  /**
   * @example
   * c1a06b46-302a-4c6e-928b-a43c0df485cf
   */
  audioResourceId?: string;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      audioFileName: 'AudioFileName',
      audioResourceId: 'AudioResourceId',
      createdTime: 'CreatedTime',
      instanceId: 'InstanceId',
      name: 'Name',
      ossFileKey: 'OssFileKey',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFileName: 'string',
      audioResourceId: 'string',
      createdTime: 'string',
      instanceId: 'string',
      name: 'string',
      ossFileKey: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

