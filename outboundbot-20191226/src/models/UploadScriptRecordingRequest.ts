// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadScriptRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cab_script_recording/upload/88a56c18-3dc8-4338-9116-911deb169780/hello.wav
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello.wav
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c209abb3-6804-4a75-b2c7-dd55c8c61b6a
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileId: 'FileId',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileId: 'string',
      fileName: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

