// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel extends $dara.Model {
  /**
   * @remarks
   * The feature of the access point.
   * 
   * @example
   * AP_Support_VbrBandwidthLimit
   */
  featureKey?: string;
  /**
   * @remarks
   * The feature value of the access point.
   * 
   * @example
   * true
   */
  featureValue?: string;
  static names(): { [key: string]: string } {
    return {
      featureKey: 'FeatureKey',
      featureValue: 'FeatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureKey: 'string',
      featureValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModels extends $dara.Model {
  accessPointFeatureModel?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel[];
  static names(): { [key: string]: string } {
    return {
      accessPointFeatureModel: 'AccessPointFeatureModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointFeatureModel: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointTypeAccessPointFeatureModelsAccessPointFeatureModel },
    };
  }

  validate() {
    if(Array.isArray(this.accessPointFeatureModel)) {
      $dara.Model.validateArray(this.accessPointFeatureModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeAccessPointsResponseBodyAccessPointSet extends $dara.Model {
  accessPointType?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointType[];
  static names(): { [key: string]: string } {
    return {
      accessPointType: 'AccessPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointType: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointType },
    };
  }

  validate() {
    if(Array.isArray(this.accessPointType)) {
      $dara.Model.validateArray(this.accessPointType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the access point.
   */
  accessPointSet?: DescribeAccessPointsResponseBodyAccessPointSet;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E85D803-C7CF-4BCD-9CFE-6DBA1DFFA027
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointSet: 'AccessPointSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointSet: DescribeAccessPointsResponseBodyAccessPointSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessPointSet && typeof (this.accessPointSet as any).validate === 'function') {
      (this.accessPointSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

