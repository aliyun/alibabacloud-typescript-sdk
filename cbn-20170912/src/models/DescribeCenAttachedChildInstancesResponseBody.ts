// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenAttachedChildInstancesResponseBodyChildInstances } from "./DescribeCenAttachedChildInstancesResponseBodyChildInstances";


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

