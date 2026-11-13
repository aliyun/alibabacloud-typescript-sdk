// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceUsage } from "./ResourceUsage";


export class GetResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. Other values indicate specific error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that describes the result of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 12345678-1234-5678-9abc-123456789abc
   */
  requestId?: string;
  /**
   * @remarks
   * The usage results for the query interval and each group.
   * 
   * @example
   * {"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T02:00:00Z","granularity":"Hour","groupBy":["teamID"],"groups":[{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"items":[{"usageName":"cpuActive","unit":"CoreSecond","total":5400,"buckets":[{"startTime":"2026-11-05T00:00:00Z","endTime":"2026-11-05T01:00:00Z","quantity":3600},{"startTime":"2026-11-05T01:00:00Z","endTime":"2026-11-05T02:00:00Z","quantity":1800}]}]}]}
   */
  resourceUsage?: ResourceUsage;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      resourceUsage: 'resourceUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resourceUsage: ResourceUsage,
    };
  }

  validate() {
    if(this.resourceUsage && typeof (this.resourceUsage as any).validate === 'function') {
      (this.resourceUsage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

