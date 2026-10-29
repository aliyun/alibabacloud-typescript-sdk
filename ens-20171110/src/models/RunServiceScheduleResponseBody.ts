// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunServiceScheduleResponseBodyCommandResultsCommandResult extends $dara.Model {
  command?: string;
  containerName?: string;
  resultMsg?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      containerName: 'ContainerName',
      resultMsg: 'ResultMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      containerName: 'string',
      resultMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBodyCommandResults extends $dara.Model {
  commandResult?: RunServiceScheduleResponseBodyCommandResultsCommandResult[];
  static names(): { [key: string]: string } {
    return {
      commandResult: 'CommandResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResult: { 'type': 'array', 'itemType': RunServiceScheduleResponseBodyCommandResultsCommandResult },
    };
  }

  validate() {
    if(Array.isArray(this.commandResult)) {
      $dara.Model.validateArray(this.commandResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunServiceScheduleResponseBody extends $dara.Model {
  commandResults?: RunServiceScheduleResponseBodyCommandResults;
  /**
   * @remarks
   * The index of the scheduled target virtual device (container pod).
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The ID of the target instance.
   * 
   * @example
   * i-5qvji3mom4ec013dyygmtxlkj
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the scheduled target instance.
   * 
   * @example
   * 172.16.246.11
   */
  instanceIp?: string;
  /**
   * @remarks
   * The start port of the scheduled target instance.
   * 
   * @example
   * 1024
   */
  instancePort?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the operation is repeated for ServiceAction values other than Console.
   * 
   * @example
   * false
   */
  requestRepeated?: string;
  /**
   * @remarks
   * The TCP service port range of the scheduled target virtual machine instance or container. Format: ${from}-${to}. Example: 80-88.
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

