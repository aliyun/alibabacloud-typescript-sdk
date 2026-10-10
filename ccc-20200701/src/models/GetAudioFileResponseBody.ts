// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the audio file.
   * 
   * @example
   * test-file.wav
   */
  audioFileName?: string;
  /**
   * @remarks
   * The audio resource ID, which is the unique identifier of the audio file.
   * 
   * @example
   * c1a06b46-302a-4c6e-928b-a43c0df485cf
   */
  audioResourceId?: string;
  /**
   * @remarks
   * The time when the audio resource was created. The format is YYYY-MM-DD HH:mm:ss.S.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The display name of the audio file.
   * 
   * @example
   * Welcome message
   */
  name?: string;
  /**
   * @remarks
   * The key of the audio resource file in OSS.
   * 
   * @example
   * ccc-test/test-file.wav
   */
  ossFileKey?: string;
  /**
   * @remarks
   * The time when the audio resource was last modified. The format is YYYY-MM-DD HH:mm:ss.S.
   * 
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

export class GetAudioFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The audio file data.
   */
  data?: GetAudioFileResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEE26562-D921-5CB2-AE49-E4C45A42D432
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAudioFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

