// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Ask customers for their opinions and suggestions about the service
   */
  description?: string;
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
   * The name.
   * 
   * @example
   * Satisfaction survey
   */
  name?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

