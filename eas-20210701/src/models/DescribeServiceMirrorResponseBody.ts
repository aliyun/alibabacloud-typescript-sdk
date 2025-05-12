// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMirrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  ratio?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The destination services to which you want to mirror traffic.
   * 
   * @example
   * foo2,foo3
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'string',
      requestId: 'string',
      serviceName: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

