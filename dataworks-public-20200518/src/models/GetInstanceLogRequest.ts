// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The historical record number of the instance. You can call the ListInstanceHistory operation to query the ID.
   * 
   * @example
   * 1
   */
  instanceHistoryId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  instanceId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      instanceHistoryId: 'InstanceHistoryId',
      instanceId: 'InstanceId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceHistoryId: 'number',
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

