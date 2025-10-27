// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionsResponseBodyExecutionsEnvironmentVariables extends $dara.Model {
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
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListExecutionsResponseBodyExecutionsEnvironment extends $dara.Model {
  variables?: ListExecutionsResponseBodyExecutionsEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutionsEnvironmentVariables },
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

export class ListExecutionsResponseBodyExecutions extends $dara.Model {
  environment?: ListExecutionsResponseBodyExecutionsEnvironment;
  /**
   * @remarks
   * The definition of the flow.
   * 
   * @example
   * version: v1.0\\ntype: flow\\nname: test\\nsteps:\\n  - type: pass\\n    name: mypass
   */
  flowDefinition?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * flow
   */
  flowName?: string;
  /**
   * @remarks
   * The input of the execution, which is in the JSON format.
   * 
   * @example
   * {"key":"value"}
   */
  input?: string;
  /**
   * @remarks
   * The name of the execution.
   * 
   * @example
   * exec
   */
  name?: string;
  /**
   * @remarks
   * The output of the execution, which is in the JSON format
   * 
   * @example
   * {"key":"value"}
   */
  output?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  startedTime?: string;
  /**
   * @remarks
   * The status of the execution.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The time when the execution stopped.
   * 
   * @example
   * 2019-01-01T01:01:01.001Z
   */
  stoppedTime?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      flowDefinition: 'FlowDefinition',
      flowName: 'FlowName',
      input: 'Input',
      name: 'Name',
      output: 'Output',
      startedTime: 'StartedTime',
      status: 'Status',
      stoppedTime: 'StoppedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: ListExecutionsResponseBodyExecutionsEnvironment,
      flowDefinition: 'string',
      flowName: 'string',
      input: 'string',
      name: 'string',
      output: 'string',
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
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

export class ListExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about executions.
   */
  executions?: ListExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The start key for the next query. This parameter is not returned if this is the last query.
   * 
   * >  This parameter may not be displayed in the response because no next page exists.
   * 
   * @example
   * exec2
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
      executions: 'Executions',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

