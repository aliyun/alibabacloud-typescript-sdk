// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskNodeGroupParam extends $dara.Model {
  dataDiskCapacity?: number;
  nodeGroupId?: string;
  rollingRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataDiskCapacity: 'DataDiskCapacity',
      nodeGroupId: 'NodeGroupId',
      rollingRestart: 'RollingRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCapacity: 'number',
      nodeGroupId: 'string',
      rollingRestart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

