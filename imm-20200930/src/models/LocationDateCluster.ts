// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";


export class LocationDateCluster extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   */
  addresses?: Address[];
  /**
   * @remarks
   * The time when the spatiotemporal cluster was created.
   * 
   * @example
   * 2022-11-16T13:14:34.882523669+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The custom ID.
   * 
   * @example
   * user-01
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels.
   * 
   * @example
   * {
   *       "User": "Jane"
   * }
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The end time of the spatiotemporal cluster.
   * 
   * @example
   * 2022-05-02T23:59:59.999999999+08:00
   */
  locationDateClusterEndTime?: string;
  /**
   * @remarks
   * The administrative level of the spatiotemporal cluster.
   * 
   * Enumerated values:
   * 
   * *   country
   * *   province
   * *   city
   * *   district
   * *   township
   * 
   * @example
   * province
   */
  locationDateClusterLevel?: string;
  /**
   * @remarks
   * The start time of the spatiotemporal cluster.
   * 
   * @example
   * 2022-05-01T00:00:00+08:00
   */
  locationDateClusterStartTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * location-date-cluster-14f48cb3-079d-4595-80c4-5735284b****
   */
  objectId?: string;
  /**
   * @remarks
   * The custom title.
   */
  title?: string;
  /**
   * @remarks
   * The time when the spatiotemporal cluster was updated.
   * 
   * @example
   * 2022-11-16T13:15:05.65746784+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      locationDateClusterEndTime: 'LocationDateClusterEndTime',
      locationDateClusterLevel: 'LocationDateClusterLevel',
      locationDateClusterStartTime: 'LocationDateClusterStartTime',
      objectId: 'ObjectId',
      title: 'Title',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      locationDateClusterEndTime: 'string',
      locationDateClusterLevel: 'string',
      locationDateClusterStartTime: 'string',
      objectId: 'string',
      title: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

