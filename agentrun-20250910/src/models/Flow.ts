// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";
import { LoggingConfiguration } from "./LoggingConfiguration";
import { TracingConfiguration } from "./TracingConfiguration";


export class Flow extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The definition of the workflow.
   * 
   * @example
   * {}
   */
  definition?: string;
  /**
   * @remarks
   * The description of the workflow, which explains the purpose and functionality of the workflow.
   * 
   * @example
   * Customer service automation flow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable public network access for the workflow. This setting serves as the default policy at the workflow level.
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The environment variable configuration of the workflow, which contains a list of named variables.
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * The ARN of the execution role that grants the workflow permissions to access cloud services.
   * 
   * @example
   * acs:ram::123456789012:role/FlowExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The external storage location of the workflow.
   * 
   * @example
   * oss://bucket/path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * The globally unique Alibaba Cloud Resource Name (ARN) of the workflow.
   * 
   * @example
   * acs:agentrun:cn-hangzhou:123456789012:workspaces/ws-xxx/flows/flow-xxx
   */
  flowArn?: string;
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * @example
   * flow-1234567890abcdef
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the workflow, which is used to identify and distinguish different workflow instances.
   * 
   * @example
   * my-flow
   */
  flowName?: string;
  /**
   * @remarks
   * The time when the workflow was last updated, in ISO 8601 format.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The logging configuration of the workflow.
   */
  loggingConfiguration?: LoggingConfiguration;
  /**
   * @remarks
   * The ID of the resource group to which the workflow belongs.
   * 
   * @example
   * rg-acfmxsn4m4a4b4a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Tracing Analysis configuration of the workflow.
   */
  tracingConfiguration?: TracingConfiguration;
  /**
   * @remarks
   * The ID of the workspace to which the workflow belongs.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      definition: 'definition',
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
      environmentConfiguration: 'environmentConfiguration',
      executionRoleArn: 'executionRoleArn',
      externalStorageLocation: 'externalStorageLocation',
      flowArn: 'flowArn',
      flowId: 'flowId',
      flowName: 'flowName',
      lastUpdatedAt: 'lastUpdatedAt',
      loggingConfiguration: 'loggingConfiguration',
      resourceGroupId: 'resourceGroupId',
      tracingConfiguration: 'tracingConfiguration',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      definition: 'string',
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      environmentConfiguration: EnvironmentConfiguration,
      executionRoleArn: 'string',
      externalStorageLocation: 'string',
      flowArn: 'string',
      flowId: 'string',
      flowName: 'string',
      lastUpdatedAt: 'string',
      loggingConfiguration: LoggingConfiguration,
      resourceGroupId: 'string',
      tracingConfiguration: TracingConfiguration,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.environmentConfiguration && typeof (this.environmentConfiguration as any).validate === 'function') {
      (this.environmentConfiguration as any).validate();
    }
    if(this.loggingConfiguration && typeof (this.loggingConfiguration as any).validate === 'function') {
      (this.loggingConfiguration as any).validate();
    }
    if(this.tracingConfiguration && typeof (this.tracingConfiguration as any).validate === 'function') {
      (this.tracingConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

