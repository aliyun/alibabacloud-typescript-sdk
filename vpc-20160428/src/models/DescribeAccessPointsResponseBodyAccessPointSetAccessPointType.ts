// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels } from "./DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels";


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointType extends $dara.Model {
  /**
   * @remarks
   * The feature model of the access point.
   */
  accessPointFeatureModels?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-cn-hangzhou-****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The region ID of the access point.
   * 
   * @example
   * cn-hangzhou
   */
  attachedRegionNo?: string;
  /**
   * @remarks
   * The description of the access point.
   * 
   * @example
   * The description of the access point.
   */
  description?: string;
  /**
   * @remarks
   * The Internet service provider (ISP) of the access point. Valid values:
   * 
   * @example
   * Telehouse
   */
  hostOperator?: string;
  /**
   * @remarks
   * The location of the access point.
   * 
   * @example
   * Hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The status of the access point. Valid values:
   * 
   * *   **recommended**: The access point is ready for use.
   * *   **hot**: A large number of Express Connect circuits are connected to the access point.
   * *   **full**: The number of Express Connect circuits connected to the access point has reached the upper limit.
   * *   **disabled**: The access point is unavailable.
   * 
   * @example
   * recommended
   */
  status?: string;
  /**
   * @remarks
   * The network type of the Express Connect circuit. Default value: **VPC**.
   * 
   * @example
   * VPC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointFeatureModels: 'AccessPointFeatureModels',
      accessPointId: 'AccessPointId',
      attachedRegionNo: 'AttachedRegionNo',
      description: 'Description',
      hostOperator: 'HostOperator',
      location: 'Location',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointFeatureModels: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels,
      accessPointId: 'string',
      attachedRegionNo: 'string',
      description: 'string',
      hostOperator: 'string',
      location: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.accessPointFeatureModels && typeof (this.accessPointFeatureModels as any).validate === 'function') {
      (this.accessPointFeatureModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

