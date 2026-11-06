// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetGatewayQuotaRuleResponseBodyDataConflictPreviewItems extends $dara.Model {
  /**
   * @remarks
   * The period type of the existing conflicting rule on the subject. A value of day, week, or month indicates that the period of the existing conflicting rule on the subject is daily, weekly, or monthly.
   * 
   * @example
   * week
   */
  conflictPeriodType?: string;
  /**
   * @remarks
   * The type of the existing conflicting rule on the subject. A value of calendar indicates that the existing conflicting rule on the subject uses a natural period. A value of epoch indicates that the existing conflicting rule uses a custom period.
   * 
   * @example
   * calendar
   */
  conflictType?: string;
  /**
   * @remarks
   * The consumer ID. This parameter can now be uniformly replaced by subjectId.
   * 
   * @example
   * cs-d82n1g6m1hkm3xxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer name. This parameter can now be uniformly replaced by subjectName.
   * 
   * @example
   * consumer-a
   */
  consumerName?: string;
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

export class ResetGatewayQuotaRuleResponseBodyDataConflictPreview extends $dara.Model {
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
   * The list of conflicting subjects.
   */
  items?: ResetGatewayQuotaRuleResponseBodyDataConflictPreviewItems[];
  /**
   * @remarks
   * The total number of conflicts.
   * 
   * @example
   * 20
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
      items: { 'type': 'array', 'itemType': ResetGatewayQuotaRuleResponseBodyDataConflictPreviewItems },
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

export class ResetGatewayQuotaRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the semantics of the current write request can be accepted by the system. A value of false is common in retryable scenarios such as unconfirmed conflict overwrites.
   * 
   * @example
   * true
   */
  accepted?: boolean;
  /**
   * @remarks
   * The conflict preview.
   */
  conflictPreview?: ResetGatewayQuotaRuleResponseBodyDataConflictPreview;
  /**
   * @remarks
   * Indicates whether it is a dry run.
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
   * qr-d8j7fpmm1hks65xxxx
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
      conflictPreview: ResetGatewayQuotaRuleResponseBodyDataConflictPreview,
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

export class ResetGatewayQuotaRuleResponseBody extends $dara.Model {
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
   * The request data content.
   * 
   * @example
   * {\\"key\\": \\"value\\"}
   */
  data?: ResetGatewayQuotaRuleResponseBodyData;
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
      data: ResetGatewayQuotaRuleResponseBodyData,
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

