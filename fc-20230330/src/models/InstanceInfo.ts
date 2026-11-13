// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 0
   */
  createdTimeMs?: number;
  /**
   * @remarks
   * The time when the instance was destroyed, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 0
   */
  destroyedTimeMs?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1ef6b6ff-7f7b-485e-ab49-501ac681****
   */
  instanceId?: string;
  /**
   * @remarks
   * The version or alias of the function to which the instance belongs.
   * 
   * @example
   * 3
   */
  qualifier?: string;
  /**
   * @remarks
   * The resource type of the instance.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Destroyed
   */
  status?: string;
  /**
   * @remarks
   * The version of the function to which the instance belongs. If the function instance belongs to the LATEST alias, 0 is returned as the version ID.
   * 
   * @example
   * 0
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTimeMs: 'createdTimeMs',
      destroyedTimeMs: 'destroyedTimeMs',
      instanceId: 'instanceId',
      qualifier: 'qualifier',
      resourceType: 'resourceType',
      status: 'status',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimeMs: 'number',
      destroyedTimeMs: 'number',
      instanceId: 'string',
      qualifier: 'string',
      resourceType: 'string',
      status: 'string',
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

