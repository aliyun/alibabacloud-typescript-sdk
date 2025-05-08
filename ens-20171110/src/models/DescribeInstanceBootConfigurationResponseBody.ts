// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceBootConfigurationResponseBodyInstances } from "./DescribeInstanceBootConfigurationResponseBodyInstances";


export class DescribeInstanceBootConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Schema of Response
   */
  instances?: DescribeInstanceBootConfigurationResponseBodyInstances;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstanceBootConfigurationResponseBodyInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

