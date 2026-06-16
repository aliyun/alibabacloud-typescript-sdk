// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentConfiguration } from "./EnvironmentConfiguration";
import { LoggingConfiguration } from "./LoggingConfiguration";
import { TracingConfiguration } from "./TracingConfiguration";


export class UpdateFlowInput extends $dara.Model {
  /**
   * @remarks
   * The definition content of the workflow, in JSON or YAML format
   * 
   * @example
   * {}
   */
  definition?: string;
  /**
   * @remarks
   * The description of the workflow, used to explain its purpose and functionality
   * 
   * @example
   * Customer service automation flow
   */
  description?: string;
  /**
   * @remarks
   * Whether to disable public network access for the workflow, serving as the default policy at the workflow level. When FlowEndpoint is not specified, this value will be inherited
   */
  disablePublicNetworkAccess?: boolean;
  /**
   * @remarks
   * The environment variable configuration of the workflow, containing a list of named variables
   */
  environmentConfiguration?: EnvironmentConfiguration;
  /**
   * @remarks
   * The execution role ARN that grants the workflow access permissions to cloud services
   * 
   * @example
   * acs:ram::123456789012:role/FlowExecutionRole
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The external storage location of the workflow, such as an OSS path
   * 
   * @example
   * oss://bucket/path
   */
  externalStorageLocation?: string;
  /**
   * @remarks
   * The unique identifier name of the workflow, used to distinguish different workflow instances
   * 
   * @example
   * my-flow
   */
  flowName?: string;
  /**
   * @remarks
   * The logging configuration of the workflow
   */
  loggingConfiguration?: LoggingConfiguration;
  /**
   * @remarks
   * The resource group identifier to which the workflow belongs
   * 
   * @example
   * rg-acfmxsn4m4a4b4a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The distributed tracing configuration of the workflow
   */
  tracingConfiguration?: TracingConfiguration;
  /**
   * @remarks
   * The workspace identifier to which the workflow belongs, used for resource isolation and permission management
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'definition',
      description: 'description',
      disablePublicNetworkAccess: 'disablePublicNetworkAccess',
      environmentConfiguration: 'environmentConfiguration',
      executionRoleArn: 'executionRoleArn',
      externalStorageLocation: 'externalStorageLocation',
      flowName: 'flowName',
      loggingConfiguration: 'loggingConfiguration',
      resourceGroupId: 'resourceGroupId',
      tracingConfiguration: 'tracingConfiguration',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      description: 'string',
      disablePublicNetworkAccess: 'boolean',
      environmentConfiguration: EnvironmentConfiguration,
      executionRoleArn: 'string',
      externalStorageLocation: 'string',
      flowName: 'string',
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

