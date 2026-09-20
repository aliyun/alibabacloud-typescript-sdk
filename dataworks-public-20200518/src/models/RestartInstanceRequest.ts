// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * You can obtain the ID from Data.Instances[].InstanceId in the ListInstances response.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * - PROD: production environment
   * - DEV: development environment
   * 
   * This parameter is required.
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

