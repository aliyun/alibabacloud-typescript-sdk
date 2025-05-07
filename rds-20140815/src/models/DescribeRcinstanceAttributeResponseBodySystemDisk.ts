// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodySystemDisk extends $dara.Model {
  deleteWithInstance?: boolean;
  encrypted?: string;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWithInstance: 'boolean',
      encrypted: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
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

