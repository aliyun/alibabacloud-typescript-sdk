// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaApplicationsForTemplateResponseBodyFailResults extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account of the members in a resource directory whose quota increase request is rejected.
   * 
   * @example
   * 135048337611****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The reason for the rejection.
   * 
   * @example
   * The quota adjustment application is being processed. Please try again later.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaApplicationsForTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud accounts for which the quotas are applied.
   */
  aliyunUids?: string[];
  /**
   * @remarks
   * The ID of the quota application batch.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
   */
  batchQuotaApplicationId?: string;
  /**
   * @remarks
   * The Alibaba Cloud accounts of the members in a resource directory whose quota increase request is rejected, and the reason for the rejection.
   */
  failResults?: CreateQuotaApplicationsForTemplateResponseBodyFailResults[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FF8CAF0-29D9-4F11-B6A4-FD2CBCA016D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUids: 'AliyunUids',
      batchQuotaApplicationId: 'BatchQuotaApplicationId',
      failResults: 'FailResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUids: { 'type': 'array', 'itemType': 'string' },
      batchQuotaApplicationId: 'string',
      failResults: { 'type': 'array', 'itemType': CreateQuotaApplicationsForTemplateResponseBodyFailResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunUids)) {
      $dara.Model.validateArray(this.aliyunUids);
    }
    if(Array.isArray(this.failResults)) {
      $dara.Model.validateArray(this.failResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

