// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * For testing
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 19ac2375-53e3-477f-abe9-6cd334227981
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Navigation test scenario
   */
  name?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
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

