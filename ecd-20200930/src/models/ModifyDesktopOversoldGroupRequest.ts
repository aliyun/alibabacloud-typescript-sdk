// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopOversoldGroupRequest extends $dara.Model {
  concurrenceCount?: number;
  description?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  name?: string;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  policyGroupId?: string;
  stopDuration?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      description: 'Description',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      policyGroupId: 'PolicyGroupId',
      stopDuration: 'StopDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      description: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      name: 'string',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      policyGroupId: 'string',
      stopDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

