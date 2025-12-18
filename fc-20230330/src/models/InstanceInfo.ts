// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceInfo extends $dara.Model {
  createdTimeMs?: number;
  destroyedTimeMs?: number;
  /**
   * @example
   * 1ef6b6ff-7f7b-485e-ab49-501ac681****
   */
  instanceId?: string;
  qualifier?: string;
  resourceType?: string;
  status?: string;
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

