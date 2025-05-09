// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateExecutionPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies that are missing.
   * 
   * @example
   * [{\\"Action\\": [\\"ecs:DescribeInvocationResults\\", \\"ecs:DescribeInstances\\", \\"ecs:RunCommand\\", \\"ecs:DescribeInvocations\\"], \\"ServiceName\\": \\"ecs\\", \\"Resources\\": \\"*\\"}]
   */
  missingPolicy?: string;
  /**
   * @remarks
   * The RAM policy.
   * 
   * @example
   * {}
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
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
      missingPolicy: 'string',
      policy: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

