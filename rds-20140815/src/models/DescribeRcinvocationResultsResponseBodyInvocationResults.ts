// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInvocationResultsResponseBodyInvocationResultsTags } from "./DescribeRcinvocationResultsResponseBodyInvocationResultsTags";


export class DescribeRCInvocationResultsResponseBodyInvocationResults extends $dara.Model {
  /**
   * @example
   * c-7d2a745b412b4601b2d47f6a768d****
   */
  commandId?: string;
  /**
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @example
   * 0
   */
  dropped?: number;
  /**
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @example
   * 2024-12-20T06:15:56Z
   */
  finishedTime?: string;
  /**
   * @example
   * rc-i322y2t562oh7o******
   */
  instanceId?: string;
  /**
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @example
   * t-7d2a745b412b4601b2d47f6a768d****
   */
  invokeId?: string;
  /**
   * @example
   * Running
   */
  invokeRecordStatus?: string;
  /**
   * @example
   * MTU6MzA6MDEK
   */
  output?: string;
  /**
   * @example
   * 0
   */
  repeats?: string;
  /**
   * @example
   * 2024-12-20T06:15:55Z
   */
  startTime?: string;
  /**
   * @example
   * 2025-01-19T09:15:47Z
   */
  stopTime?: string;
  tags?: DescribeRCInvocationResultsResponseBodyInvocationResultsTags[];
  /**
   * @example
   * testuser
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      tags: 'Tags',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      containerId: 'string',
      containerName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      output: 'string',
      repeats: 'string',
      startTime: 'string',
      stopTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeRCInvocationResultsResponseBodyInvocationResultsTags },
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

