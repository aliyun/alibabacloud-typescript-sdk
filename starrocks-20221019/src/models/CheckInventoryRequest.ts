// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInventoryRequest extends $dara.Model {
  /**
   * @example
   * {
   *   "clusterType": "sr",
   *   "regionId": "cn-hangzhou",
   *   "packageType": "official",
   *   "runMode": "shared_data",
   *   "beResourceSpec": {
   *     "cu": 8,
   *     "storageSize": 200,
   *     "nodeNumber": 3,
   *     "diskNumber": 1,
   *     "storagePerformanceLevel": "pl1",
   *     "diskType": "essd",
   *     "specType": "standard"
   *   },
   *   "feResourceSpec": {
   *     "cu": 8,
   *     "storageSize": 100,
   *     "nodeNumber": 3,
   *     "specType": "standard"
   *   }
   * }
   */
  clusterInfo?: string;
  /**
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

