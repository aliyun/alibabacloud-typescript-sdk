// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptWaveformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptContent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      instanceId: 'string',
      scriptContent: 'string',
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

