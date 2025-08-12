// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleTargetsResponseBodyTargetsTarget extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource. Format: `acs:{Service name abbreviation}:{regionId}:{userId}:/{Resource type}/{Resource name}/message`. Example: `acs:mns:cn-hangzhou:120886317861****:/queues/test123/message`. Fields:
   * 
   * *   {Service name abbreviation}: the abbreviation of the service name. Valid value: mns.
   * *   {userId}: the ID of the Alibaba Cloud account.
   * *   {regionId}: the region ID of the message queue or topic.
   * *   {Resource type}`: the type of the resource for which alerts are triggered. Valid values: - **queues** - **topics** {Resource name}: the name of the resource. - If the resource type is set to **queues**, the resource name is the name of the message queue. - If the resource type is set to **topics**, the resource name is the name of the topic.`
   * 
   * @example
   * acs:mns:cn-hangzhou:120886317861****:/queues/test/message
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
   * The parameters of the alert callback. The parameters are in the JSON format.
   * 
   * @example
   * {"customField1":"value1","customField2":"$.name"}
   */
  jsonParams?: string;
  /**
   * @remarks
   * The level of the alert. Valid values:
   * 
   * *   INFO: information
   * *   WARN: warning
   * *   CRITICAL: critical
   * 
   * @example
   * ["INFO", "WARN", "CRITICAL"]
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
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

export class DescribeMetricRuleTargetsResponseBodyTargets extends $dara.Model {
  target?: DescribeMetricRuleTargetsResponseBodyTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeMetricRuleTargetsResponseBodyTargetsTarget },
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

export class DescribeMetricRuleTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 786E92D2-AC66-4250-B76F-F1E2FCDDBA1C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The information about the resource for which alerts are triggered.
   */
  targets?: DescribeMetricRuleTargetsResponseBodyTargets;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      targets: DescribeMetricRuleTargetsResponseBodyTargets,
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

