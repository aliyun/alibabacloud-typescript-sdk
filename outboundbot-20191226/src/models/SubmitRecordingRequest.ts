// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"contactId":"3d35c0487cc041abb7ad0ce61752601f","duration":27,"fileName":"ce2659e5-a20b-4f8e-91b5-5cd909c6b96e_3d35c0487cc041abb7ad0ce61752601f.wav","filePath":"oss://ForCompatibility/waveforms/","startTime":1579057583670,"type":"Merged"}
   */
  mergedRecording?: string;
  /**
   * @example
   * {"contactId":"3d35c0487cc041abb7ad0ce61752601f","duration":27,"fileName":"ce2659e5-a20b-4f8e-91b5-5cd909c6b96e_3d35c0487cc041abb7ad0ce61752601f.wav","filePath":"oss://ForCompatibility/waveforms/","startTime":1579057583670,"type":"Source"}
   */
  resourceRecording?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e4e2a770-b97b-465a-80d8-06dca008c503
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mergedRecording: 'MergedRecording',
      resourceRecording: 'ResourceRecording',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mergedRecording: 'string',
      resourceRecording: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

