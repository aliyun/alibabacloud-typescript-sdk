// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $dara.Model {
  commodityCode?: string;
  currCapacity?: string;
  displayName?: string;
  initCapacity?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      displayName: 'DisplayName',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      currCapacity: 'string',
      displayName: 'string',
      initCapacity: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

