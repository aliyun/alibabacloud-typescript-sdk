// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsResponseBodyFlowsEnvironmentVariables extends $dara.Model {
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

export class ListFlowsResponseBodyFlowsEnvironment extends $dara.Model {
  variables?: ListFlowsResponseBodyFlowsEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlowsEnvironmentVariables },
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

export class ListFlowsResponseBodyFlows extends $dara.Model {
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
   * The definition of the flow. The definition must comply with the Flow Definition Language (FDL) syntax.
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
  environment?: ListFlowsResponseBodyFlowsEnvironment;
  /**
   * @remarks
   * The execution mode or the enumeration type. Valid values: Express and Standard. A value of Standard indicates an empty string.
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
   * e589e092-e2c0-4dee-b306-3574ddf5****
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
   * The Alibaba Cloud resource name (ARN) of the specified Resource Access Management (RAM) role that Serverless Workflow assumes to invoke resources when the flow is executed.
   * 
   * @example
   * acs:ram::${accountID}:${role}
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the flow.
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
      roleArn: 'RoleArn',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      environment: ListFlowsResponseBodyFlowsEnvironment,
      executionMode: 'string',
      id: 'string',
      lastModifiedTime: 'string',
      name: 'string',
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

export class ListFlowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of flows.
   */
  flows?: ListFlowsResponseBodyFlows[];
  /**
   * @remarks
   * The start key for the next query. This parameter is not returned if all results have been returned.
   * 
   * @example
   * flow_nextxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flows: 'Flows',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flows: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlows },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

