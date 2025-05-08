// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServcieScheduleResponseBodyPodAbstractInfo } from "./DescribeServcieScheduleResponseBodyPodAbstractInfo";


export class DescribeServcieScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The index number of the scheduled virtual device (pod).
   * 
   * @example
   * 2
   */
  index?: number;
  /**
   * @remarks
   * The ID of the scheduled instance.
   * 
   * @example
   * i-5myukg7hnpbto7m024002****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scheduled instance.
   * 
   * @example
   * 120.26.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The start port of the scheduled instance.
   * 
   * @example
   * 3306
   */
  instancePort?: number;
  /**
   * @remarks
   * The summary information about the scheduled virtual device.
   */
  podAbstractInfo?: DescribeServcieScheduleResponseBodyPodAbstractInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is repeated.
   * 
   * @example
   * false
   */
  requestRepeated?: boolean;
  /**
   * @remarks
   * The TCP port range of the scheduled instance or container. The value is in the ${from}-$-{to} format. Example: 80-88.
   * 
   * @example
   * 80-88
   */
  tcpPorts?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      podAbstractInfo: 'PodAbstractInfo',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      podAbstractInfo: DescribeServcieScheduleResponseBodyPodAbstractInfo,
      requestId: 'string',
      requestRepeated: 'boolean',
      tcpPorts: 'string',
    };
  }

  validate() {
    if(this.podAbstractInfo && typeof (this.podAbstractInfo as any).validate === 'function') {
      (this.podAbstractInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

