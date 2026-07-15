// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleResponseBodyDataConflictPreviewItems extends $dara.Model {
  /**
   * @remarks
   * The period type of the existing conflicting rule on the consumer. A value of day, week, or month indicates that the conflicting rule uses a daily, weekly, or monthly period respectively.
   * 
   * @example
   * week
   */
  conflictPeriodType?: string;
  /**
   * @remarks
   * The type of the existing conflicting rule on the consumer. A value of calendar indicates that the conflicting rule uses a calendar period. A value of epoch indicates that the conflicting rule uses a custom period.
   * 
   * @example
   * calendar
   */
  conflictType?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-xxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-a
   */
  consumerName?: string;
  static names(): { [key: string]: string } {
    return {
      conflictPeriodType: 'conflictPeriodType',
      conflictType: 'conflictType',
      consumerId: 'consumerId',
      consumerName: 'consumerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictPeriodType: 'string',
      conflictType: 'string',
      consumerId: 'string',
      consumerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayQuotaRuleResponseBodyDataConflictPreview extends $dara.Model {
  /**
   * @remarks
   * The hash of the conflict snapshot.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of conflicting entities (consumers).
   */
  items?: AddGatewayQuotaRuleResponseBodyDataConflictPreviewItems[];
  /**
   * @remarks
   * The total number of conflicts.
   * 
   * @example
   * 2
   */
  totalConflictCount?: number;
  static names(): { [key: string]: string } {
    return {
      conflictHash: 'conflictHash',
      items: 'items',
      totalConflictCount: 'totalConflictCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictHash: 'string',
      items: { 'type': 'array', 'itemType': AddGatewayQuotaRuleResponseBodyDataConflictPreviewItems },
      totalConflictCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayQuotaRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the write request is accepted by the system. A value of false typically indicates a retryable scenario, such as an unconfirmed conflict overwrite.
   * 
   * @example
   * true
   */
  accepted?: boolean;
  /**
   * @remarks
   * The conflict preview.
   */
  conflictPreview?: AddGatewayQuotaRuleResponseBodyDataConflictPreview;
  /**
   * @remarks
   * Indicates whether the request is a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * qr-xxxxx
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      accepted: 'accepted',
      conflictPreview: 'conflictPreview',
      dryRun: 'dryRun',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accepted: 'boolean',
      conflictPreview: AddGatewayQuotaRuleResponseBodyDataConflictPreview,
      dryRun: 'boolean',
      ruleId: 'string',
    };
  }

  validate() {
    if(this.conflictPreview && typeof (this.conflictPreview as any).validate === 'function') {
      (this.conflictPreview as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGatewayQuotaRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code or error code.
   * 
   * @example
   * 200, 404, 500
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {\\"key\\": \\"value\\"}
   */
  data?: AddGatewayQuotaRuleResponseBodyData;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddGatewayQuotaRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

