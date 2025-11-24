// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterPrometheusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the Prometheus service that is used to monitor a cluster in the ASM instance.
   * 
   * @example
   * p.com
   */
  prometheus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheus: 'Prometheus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheus: 'string',
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

