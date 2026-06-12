// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServicePolicyResponseBodyMissingPolicy extends $dara.Model {
  /**
   * @remarks
   * The action in the access policy.
   */
  action?: string[];
  /**
   * @remarks
   * The resource to which the permissions are granted. An asterisk (\\*) indicates all resources.
   * 
   * @example
   * *
   */
  resource?: string;
  /**
   * @remarks
   * The name of the service to which the access policy belongs.
   * 
   * @example
   * ecs
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      resource: 'Resource',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      resource: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateServicePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The missing access policies.
   */
  missingPolicy?: GenerateServicePolicyResponseBodyMissingPolicy[];
  /**
   * @remarks
   * The information about the access policy.
   * 
   * @example
   * {Statement": [{ "Action": ["oos:*"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:DescribeInstances"], "Effect": "Allow", "Resource": "*"},{ "Action": ["ecs:RunInstance"], "Effect": "Allow", "Resource": "*"}], "Version": "1"}
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5040BE9E-8DA2-5C9D-9B70-0EE6027A14BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: { 'type': 'array', 'itemType': GenerateServicePolicyResponseBodyMissingPolicy },
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.missingPolicy)) {
      $dara.Model.validateArray(this.missingPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

