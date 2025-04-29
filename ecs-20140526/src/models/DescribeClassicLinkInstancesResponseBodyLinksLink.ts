// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassicLinkInstancesResponseBodyLinksLink extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-test
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

