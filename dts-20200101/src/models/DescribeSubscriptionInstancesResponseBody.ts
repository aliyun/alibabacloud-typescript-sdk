// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubscriptionInstancesResponseBodySubscriptionInstances } from "./DescribeSubscriptionInstancesResponseBodySubscriptionInstances";


export class DescribeSubscriptionInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
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
   * The maximum number of entries that can be displayed on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC3BAAF2-74E3-4471-8EB5-96202D6A****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of change tracking instances and the details of each instance.
   */
  subscriptionInstances?: DescribeSubscriptionInstancesResponseBodySubscriptionInstances;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of change tracking instances that belong to your Alibaba Cloud account.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      subscriptionInstances: 'SubscriptionInstances',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      subscriptionInstances: DescribeSubscriptionInstancesResponseBodySubscriptionInstances,
      success: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.subscriptionInstances && typeof (this.subscriptionInstances as any).validate === 'function') {
      (this.subscriptionInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

