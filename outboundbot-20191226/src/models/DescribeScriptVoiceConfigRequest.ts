// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptVoiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 0fe7f71c-8771-42ef-9bb1-19aa16ae7120
   */
  scriptId?: string;
  /**
   * @remarks
   * The ID of the script voice configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a07b634-e15d-445f-bbcb-fc4ea2df7b87
   */
  scriptVoiceConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

