// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScheduledPreloadExecutionsResponseBodyFailedExecutions } from "./CreateScheduledPreloadExecutionsResponseBodyFailedExecutions";
import { CreateScheduledPreloadExecutionsResponseBodySuccessExecutions } from "./CreateScheduledPreloadExecutionsResponseBodySuccessExecutions";


export class CreateScheduledPreloadExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about prefetch plans that failed to be created.
   */
  failedExecutions?: CreateScheduledPreloadExecutionsResponseBodyFailedExecutions[];
  /**
   * @remarks
   * The information about plan failures.
   */
  failedMessages?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
   * @remarks
   * The number of prefetch plans that are created.
   * 
   * @example
   * 12
   */
  successCount?: number;
  /**
   * @remarks
   * The information about created prefetch plans.
   */
  successExecutions?: CreateScheduledPreloadExecutionsResponseBodySuccessExecutions[];
  /**
   * @remarks
   * The total number of new plans requested.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedExecutions: 'FailedExecutions',
      failedMessages: 'FailedMessages',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successExecutions: 'SuccessExecutions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodyFailedExecutions },
      failedMessages: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successCount: 'number',
      successExecutions: { 'type': 'array', 'itemType': CreateScheduledPreloadExecutionsResponseBodySuccessExecutions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedExecutions)) {
      $dara.Model.validateArray(this.failedExecutions);
    }
    if(Array.isArray(this.failedMessages)) {
      $dara.Model.validateArray(this.failedMessages);
    }
    if(Array.isArray(this.successExecutions)) {
      $dara.Model.validateArray(this.successExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

