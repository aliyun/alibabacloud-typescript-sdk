// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopOversoldGroupRequest extends $dara.Model {
  concurrenceCount?: number;
  dataDiskSize?: number;
  description?: string;
  desktopType?: string;
  directoryId?: string;
  idleDisconnectDuration?: number;
  imageId?: string;
  keepDuration?: number;
  name?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  stopDuration?: number;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      stopDuration: 'StopDuration',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      dataDiskSize: 'number',
      description: 'string',
      desktopType: 'string',
      directoryId: 'string',
      idleDisconnectDuration: 'number',
      imageId: 'string',
      keepDuration: 'number',
      name: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      stopDuration: 'number',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

