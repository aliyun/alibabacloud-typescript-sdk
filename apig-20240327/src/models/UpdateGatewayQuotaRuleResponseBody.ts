// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayQuotaRuleResponseBodyDataConflictPreviewItems extends $dara.Model {
  /**
   * @remarks
   * The period type of the existing conflicting rule on the consumer. A value of day, week, or month indicates that the period of the existing conflicting rule is day, week, or month, respectively. This is a legacy field. Use the periodType field in the actual response instead. This field is not guaranteed to be returned.
   * 
   * @example
   * week
   * 
   * @deprecated
   */
  conflictPeriodType?: string;
  /**
   * @remarks
   * The type of the existing conflicting rule on the consumer. Valid values: calendar, which indicates that the existing conflicting rule uses a natural period, and epoch, which indicates that the existing conflicting rule uses a custom period.
   * 
   * @example
   * calendar
   */
  conflictType?: string;
  /**
   * @remarks
   * The ID of the consumer. This parameter is replaced by subjectId.
   * 
   * @example
   * cs-d82n1g6m1hkm375xxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The name of the consumer. This parameter is replaced by subjectName.
   * 
   * @example
   * consumer-a
   */
  consumerName?: string;
  /**
   * @remarks
   * The period type of the existing conflicting rule. Valid values: day, week, and month.
   * 
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

export class UpdateGatewayQuotaRuleResponseBodyDataConflictPreview extends $dara.Model {
  /**
   * @remarks
   * The hash of the conflict.
   * 
   * @example
   * f8f44dc6cf369a017d56b7197eb4fb5ac4bbb6b09a92b9b41999541f50xxxxxx
   */
  conflictHash?: string;
  /**
   * @remarks
   * The list of conflicting subjects (consumers or consumer groups).
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
   * Indicates whether the write request is accepted by the system. If dryRun=true, a value of true only indicates that the dry run is accepted, not that the configuration is saved. If a formal write request returns false, it indicates that the configuration is not saved due to conflicts, and you should check the conflictPreview. A value of false typically occurs in retryable scenarios, such as when a conflict overwrite is not confirmed.
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
   * Indicates whether the request is a dry run.
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
   * Hello, world!
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

