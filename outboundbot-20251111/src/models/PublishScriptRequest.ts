// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b89
   */
  scriptId?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b11
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

