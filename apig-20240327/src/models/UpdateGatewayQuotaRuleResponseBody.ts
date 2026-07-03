// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleResponseBodyDataConflictPreviewItems extends $dara.Model {
  /**
   * @remarks
   * The period type of the existing conflicting rule on the consumer. Valid values: day: daily period. week: weekly period. month: monthly period.
   * 
   * @example
   * week
   */
  conflictPeriodType?: string;
  /**
   * @remarks
   * The type of the existing conflicting rule on the consumer. Valid values: calendar: The conflicting rule is a calendar-period rule. epoch: The conflicting rule is a custom-period rule.
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
   * cs-d82n1g6m1hkm375xxxxx
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

export class UpdateGatewayQuotaRuleResponseBodyDataConflictPreview extends $dara.Model {
  /**
   * @remarks
   * The hash of the conflict snapshot.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541f50xxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of conflicting principals (consumers).
   */
  items?: UpdateGatewayQuotaRuleResponseBodyDataConflictPreviewItems[];
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
      items: { 'type': 'array', 'itemType': UpdateGatewayQuotaRuleResponseBodyDataConflictPreviewItems },
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

export class UpdateGatewayQuotaRuleResponseBodyData extends $dara.Model {
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
  conflictPreview?: UpdateGatewayQuotaRuleResponseBodyDataConflictPreview;
  /**
   * @remarks
   * Indicates whether this is a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * qr-xxxxxx
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
      conflictPreview: UpdateGatewayQuotaRuleResponseBodyDataConflictPreview,
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

export class UpdateGatewayQuotaRuleResponseBody extends $dara.Model {
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
  data?: UpdateGatewayQuotaRuleResponseBodyData;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * 你好，世界！
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
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
      data: UpdateGatewayQuotaRuleResponseBodyData,
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

