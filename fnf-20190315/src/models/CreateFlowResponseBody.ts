// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowResponseBodyEnvironmentVariables extends $dara.Model {
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * key
   */
  name?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBodyEnvironment extends $dara.Model {
  variables?: CreateFlowResponseBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': CreateFlowResponseBodyEnvironmentVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the flow was created.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Considering compatibility, the system supports two flow definition specifications.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n - type: pass\\n name: mypass
   */
  definition?: string;
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * test flow
   */
  description?: string;
  environment?: CreateFlowResponseBodyEnvironment;
  /**
   * @remarks
   * The execution mode. Valid values: Express and Standard. Considering compatibility, an empty string is equivalent to the Standard execution mode.
   * 
   * @example
   * Standard
   */
  executionMode?: string;
  /**
   * @remarks
   * The unique ID of the flow.
   * 
   * @example
   * e589e092-e2c0-4dee-b306-3574ddfdddf5****
   */
  id?: string;
  /**
   * @remarks
   * The time when the flow was last modified.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  name?: string;
  /**
   * @remarks
   * The request ID. Each time an `HTTP status code` is returned, Serverless Workflow returns a value for the parameter.
   * 
   * @example
   * testRequestID
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
   * 
   * @example
   * acs:ram:${region}:${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow.
   * 
   * Valid value:
   * 
   * *   FDL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * FDL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      environment: 'Environment',
      executionMode: 'ExecutionMode',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      environment: CreateFlowResponseBodyEnvironment,
      executionMode: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

