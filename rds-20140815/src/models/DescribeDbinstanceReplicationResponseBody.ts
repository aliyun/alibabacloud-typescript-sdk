// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceReplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the native replication mods is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * ON
   */
  externalReplication?: string;
  /**
   * @remarks
   * The replication latency. Unit: seconds.
   * 
   * @example
   * 0
   */
  replicationDelay?: string;
  /**
   * @remarks
   * The replication error message.
   * 
   * @example
   * Got fatal error 1236 from master when reading data from binary log...
   */
  replicationErrorMessage?: string;
  replicationIp?: string;
  replicationPort?: string;
  /**
   * @remarks
   * The source of the native replication.
   * 
   * @example
   * 192.168.x.x
   */
  replicationSource?: string;
  /**
   * @remarks
   * The current replication status. Valid values:
   * 
   * *   **Running**
   * *   **Connecting**
   * *   **Stopped**
   * *   **Error**
   * 
   * @example
   * Running
   * Connecting
   * Stopped
   * Error
   */
  replicationState?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      externalReplication: 'ExternalReplication',
      replicationDelay: 'ReplicationDelay',
      replicationErrorMessage: 'ReplicationErrorMessage',
      replicationIp: 'ReplicationIp',
      replicationPort: 'ReplicationPort',
      replicationSource: 'ReplicationSource',
      replicationState: 'ReplicationState',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalReplication: 'string',
      replicationDelay: 'string',
      replicationErrorMessage: 'string',
      replicationIp: 'string',
      replicationPort: 'string',
      replicationSource: 'string',
      replicationState: 'string',
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

