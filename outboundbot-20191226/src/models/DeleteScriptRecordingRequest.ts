// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScriptRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the recording belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1eefcb81-cd58-4143-8180-6a962d79d708
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scenario to which the recording belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcc42f0d-cfd8-4866-9bbf-002042503745
   */
  scriptId?: string;
  /**
   * @remarks
   * A list of recording IDs. If this parameter is empty, all recordings are selected by default.
   * 
   * > Obtain the recording IDs from the ListScriptRecording operation.
   * 
   * @example
   * ["d17d5bfa-4972-4389-9718-f9602edabe48"]
   */
  uuidsJson?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      uuidsJson: 'UuidsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      uuidsJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

