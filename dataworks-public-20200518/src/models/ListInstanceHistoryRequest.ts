// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the ListInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV. By default, data of instances in the production environment is queried.
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

