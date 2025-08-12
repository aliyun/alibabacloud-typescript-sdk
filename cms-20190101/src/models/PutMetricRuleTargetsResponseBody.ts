// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMetricRuleTargetsResponseBodyFailDataTargetsTarget extends $dara.Model {
  /**
   * @remarks
   * The ARN of the resource. Format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message`. SMQ, Auto Scaling, Simple Log Service, and Function Compute are supported. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. The following part describes the ARN of SMQ and the parameters in the ARN:
   * 
   * *   {Service name abbreviation}: mns.
   * 
   * *   {userId}: the ID of the Alibaba Cloud account.
   * 
   * *   {regionId}: the region ID of the SMQ queue or topic.
   * 
   * *   {Resource type}: the type of the resource for which alerts are triggered. Valid values:
   * 
   *     *   **queues**
   *     *   **topics**
   * 
   * *   {Resource name}: the resource name.
   * 
   *     *   If the resource type is **queues**, the resource name is the queue name.
   *     *   If the resource type is **topics**, the resource name is the topic name.
   * 
   * @example
   * acs:mns:cn-hangzhou:111:/queues/test/message
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the resource for which alerts are triggered.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   INFO
   * *   WARN
   * *   CRITICAL
   * 
   * @example
   * ["INFO", "WARN", "CRITICAL"]
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargets extends $dara.Model {
  target?: PutMetricRuleTargetsResponseBodyFailDataTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutMetricRuleTargetsResponseBodyFailDataTargetsTarget },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailData extends $dara.Model {
  /**
   * @remarks
   * The information about the resources for which alerts are triggered.
   */
  targets?: PutMetricRuleTargetsResponseBodyFailDataTargets;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: PutMetricRuleTargetsResponseBodyFailDataTargets,
    };
  }

  validate() {
    if(this.targets && typeof (this.targets as any).validate === 'function') {
      (this.targets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The failed data.
   */
  failData?: PutMetricRuleTargetsResponseBodyFailData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A569B0D-9055-58AF-9E82-BAEAF95C0FD5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failData: 'FailData',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failData: PutMetricRuleTargetsResponseBodyFailData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failData && typeof (this.failData as any).validate === 'function') {
      (this.failData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

