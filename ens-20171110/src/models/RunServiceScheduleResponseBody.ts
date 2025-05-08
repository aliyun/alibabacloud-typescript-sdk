// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunServiceScheduleResponseBodyCommandResults } from "./RunServiceScheduleResponseBodyCommandResults";


export class RunServiceScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution results of the commands.
   */
  commandResults?: RunServiceScheduleResponseBodyCommandResults;
  /**
   * @remarks
   * The index number of the scheduled virtual device (pod).
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The ID of the scheduled instance.
   * 
   * @example
   * i-5qvji3mom4ec013dyygmtxlkj
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the scheduled instance.
   * 
   * @example
   * 172.16.246.11
   */
  instanceIp?: string;
  /**
   * @remarks
   * The start port of the scheduled instance.
   * 
   * @example
   * 1024
   */
  instancePort?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is repeated. This parameter is not returned if ServcieAction is set to Console.
   * 
   * @example
   * false
   */
  requestRepeated?: string;
  /**
   * @remarks
   * The TCP port range of the scheduled instance or container. The value is in the ${from}-$-{to} format. Example: 80-88.
   * 
   * @example
   * "80-88"
   */
  tcpPorts?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandResults: 'CommandResults',
      index: 'Index',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instancePort: 'InstancePort',
      requestId: 'RequestId',
      requestRepeated: 'RequestRepeated',
      tcpPorts: 'TcpPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResults: RunServiceScheduleResponseBodyCommandResults,
      index: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instancePort: 'number',
      requestId: 'string',
      requestRepeated: 'string',
      tcpPorts: 'boolean',
    };
  }

  validate() {
    if(this.commandResults && typeof (this.commandResults as any).validate === 'function') {
      (this.commandResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

