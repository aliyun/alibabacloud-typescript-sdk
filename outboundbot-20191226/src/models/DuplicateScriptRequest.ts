// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DuplicateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 361c8a53-0e29-42f3-8aa7-c7752d010399
   */
  instanceId?: string;
  /**
   * @remarks
   * The name for the new script.
   * 
   * This parameter is required.
   * 
   * @example
   * 复制的催收话术
   */
  name?: string;
  /**
   * @remarks
   * The ID of the source script.
   * 
   * This parameter is required.
   * 
   * @example
   * 6114e7e8-4140-48d9-b46d-65ea29f13fe8
   */
  sourceScriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      sourceScriptId: 'SourceScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      sourceScriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

