// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call ListInstances to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD (production environment) and DEV (development environment). Default value: PROD.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

