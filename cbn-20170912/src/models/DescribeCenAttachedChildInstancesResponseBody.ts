// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenAttachedChildInstancesResponseBodyChildInstancesChildInstance extends $dara.Model {
  cenId?: string;
  childInstanceAttachTime?: string;
  childInstanceId?: string;
  childInstanceOwnerId?: number;
  childInstanceRegionId?: string;
  childInstanceType?: string;
  managedService?: string;
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

