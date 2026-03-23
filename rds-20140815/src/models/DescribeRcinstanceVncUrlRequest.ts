// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceVncUrlRequest extends $dara.Model {
  dbType?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

