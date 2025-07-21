// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ARN of the access control rule.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:network/networkrule_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Creat by kst-hzz62ee817bvyyr5****
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address or private CIDR block.
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  /**
   * @remarks
   * The network type. Only private IP addresses are supported. The value is fixed as Private.
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      description: 'Description',
      requestId: 'RequestId',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      description: 'string',
      requestId: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

