// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs } from "./DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs";


export class DescribeInstanceSecurityConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return result of the request.
   */
  instanceSecurityConfigs?: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSecurityConfigs: 'InstanceSecurityConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSecurityConfigs: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceSecurityConfigs && typeof (this.instanceSecurityConfigs as any).validate === 'function') {
      (this.instanceSecurityConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

