// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds extends $dara.Model {
  targetId?: string[];
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetId)) {
      $dara.Model.validateArray(this.targetId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBodyFailIds extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources that failed to be deleted.
   */
  targetIds?: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds;
  static names(): { [key: string]: string } {
    return {
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIds: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds,
    };
  }

  validate() {
    if(this.targetIds && typeof (this.targetIds as any).validate === 'function') {
      (this.targetIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * **
   * 
   * **Description** The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The IDs of the resources that failed to be deleted.
   */
  failIds?: DeleteMetricRuleTargetsResponseBodyFailIds;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 786E92D2-AC66-4250-B76F-F1E2FCDDBA1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIds: 'FailIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failIds: DeleteMetricRuleTargetsResponseBodyFailIds,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failIds && typeof (this.failIds as any).validate === 'function') {
      (this.failIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

