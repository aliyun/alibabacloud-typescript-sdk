// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayQuotaRuleResponseBodyDataConflictPreviewItems extends $dara.Model {
  /**
   * @remarks
   * The period type of the existing conflicting rule on the consumption subject. A value of day, week, or month indicates that the period of the existing conflicting rule is day, week, or month, respectively.
   * 
   * @example
   * week
   * 
   * @deprecated
   */
  conflictPeriodType?: string;
  /**
   * @remarks
   * The type of the existing conflicting rule on the consumption subject. A value of calendar indicates that the existing conflicting rule is a natural period rule. A value of epoch indicates that the existing conflicting rule is a custom period rule.
   * 
   * @example
   * calendar
   */
  conflictType?: string;
  /**
   * @remarks
   * The ID of the conflicting consumer. This parameter is deprecated. Use subjectId instead.
   * 
   * @example
   * cs-xxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The name of the conflicting consumer. This parameter is deprecated. Use subjectName instead.
   * 
   * @example
   * consumer-a
   */
  consumerName?: string;
  /**
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The ID of the conflicting subject.
   * 
   * @example
   * cs-xxx
   */
  subjectId?: string;
  /**
   * @remarks
   * The name of the conflicting subject.
   * 
   * @example
   * consumer-a
   */
  subjectName?: string;
  /**
   * @remarks
   * The type of the conflicting subject. Valid values: consumer and consumer_group.
   * 
   * @example
   * consumer
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      conflictPeriodType: 'conflictPeriodType',
      conflictType: 'conflictType',
      consumerId: 'consumerId',
      consumerName: 'consumerName',
      periodType: 'periodType',
      subjectId: 'subjectId',
      subjectName: 'subjectName',
      subjectType: 'subjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictPeriodType: 'string',
      conflictType: 'string',
      consumerId: 'string',
      consumerName: 'string',
      periodType: 'string',
      subjectId: 'string',
      subjectName: 'string',
      subjectType: 'string',
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
   * The hash of the conflict.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541fxxxxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of conflicting subjects (consumers or consumer groups).
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
   * Indicates whether the semantics of the current write request can be accepted by the system. A value of false typically occurs in retryable scenarios, such as when a conflict is not confirmed for overwriting.
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
   * Indicates whether a dry run is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the rule.
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
   * The unique identifier of the request.
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

