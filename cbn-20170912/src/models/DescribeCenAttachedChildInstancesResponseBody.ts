// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the network instance was attached to the CEN instance.
   * 
   * The time follows the ISO8601 standard in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-08-10T06:27Z
   */
  childInstanceAttachTime?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-8vb1lu55yt9rlwgxl****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * @example
   * 1688000000000000
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the network instance is deployed.
   * 
   * @example
   * cn-zhangjiakou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  managedService?: string;
  /**
   * @remarks
   * The status of the network instance. Valid values:
   * 
   * *   **Attaching**: The network instance is being created on the transit router.
   * *   **Attached**: The network instance has been created on the transit router.
   * *   **Detaching**: The network instance is being deleted from the transit router.
   * 
   * @example
   * Attached
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      managedService: 'ManagedService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      managedService: 'string',
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

export class DescribeCenAttachedChildInstancesResponseBodyChildInstances extends $dara.Model {
  childInstance?: DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance[];
  static names(): { [key: string]: string } {
    return {
      childInstance: 'ChildInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstance: { 'type': 'array', 'itemType': DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance },
    };
  }

  validate() {
    if(Array.isArray(this.childInstance)) {
      $dara.Model.validateArray(this.childInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenAttachedChildInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the network instances.
   */
  childInstances?: DescribeCenAttachedChildInstancesResponseBodyChildInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2063B16-852B-5B66-B73D-4ED4D1A5E5C2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      childInstances: 'ChildInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstances: DescribeCenAttachedChildInstancesResponseBodyChildInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.childInstances && typeof (this.childInstances as any).validate === 'function') {
      (this.childInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

