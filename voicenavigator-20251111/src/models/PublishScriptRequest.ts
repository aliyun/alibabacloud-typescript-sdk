// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishScriptRequest extends $dara.Model {
  /**
   * @example
   * 19ac2375-53e3-477f-abe9-6cd334227981
   */
  instanceId?: string;
  /**
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b091
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

