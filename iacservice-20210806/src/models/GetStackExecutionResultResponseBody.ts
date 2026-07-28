// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackExecutionResultResponseBodyStackResultsDeployments extends $dara.Model {
  /**
   * @remarks
   * The deployment name.
   * 
   * @example
   * prod
   */
  deploymentName?: string;
  /**
   * @remarks
   * The result of the deployment task.
   * 
   * @example
   * Service returned null result
   */
  jobResult?: string;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * Applied
   */
  status?: string;
  /**
   * @remarks
   * The URL to view the deployment details.
   * 
   * @example
   * https://iacnext.console.aliyun.com/stack/stack-al181av2bloah5s53hacbp4/details?deploymentName=production&deploymentNo=6&configVersion=v1
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentName: 'deploymentName',
      jobResult: 'jobResult',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentName: 'string',
      jobResult: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackExecutionResultResponseBodyStackResults extends $dara.Model {
  /**
   * @remarks
   * The deployment results of the stack.
   */
  deployments?: GetStackExecutionResultResponseBodyStackResultsDeployments[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * No corresponding Stack found.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the stack.
   * 
   * @example
   * stack-al181av2bloah5s53hacbp4
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * 
   * @example
   * stack-demo
   */
  stackName?: string;
  /**
   * @remarks
   * The execution status of the stack. Valid values:
   * - Deploying: deploying
   * - Errored: deployment failed
   * - Deployed: deployment completed
   * - Waiting: waiting for deployment.
   * 
   * @example
   * Deployed
   */
  stackStatus?: string;
  static names(): { [key: string]: string } {
    return {
      deployments: 'deployments',
      message: 'message',
      stackId: 'stackId',
      stackName: 'stackName',
      stackStatus: 'stackStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': GetStackExecutionResultResponseBodyStackResultsDeployments },
      message: 'string',
      stackId: 'string',
      stackName: 'string',
      stackStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deployments)) {
      $dara.Model.validateArray(this.deployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackExecutionResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2D40488-3F74-568B-87EC-1C04D098DF8B
   */
  requestId?: string;
  /**
   * @remarks
   * The execution results of the triggered stacks.
   */
  stackResults?: GetStackExecutionResultResponseBodyStackResults[];
  /**
   * @remarks
   * The unique ID of the trigger.
   * 
   * @example
   * event-xxx
   */
  triggerId?: string;
  triggeredStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      stackResults: 'stackResults',
      triggerId: 'triggerId',
      triggeredStatus: 'triggeredStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackResults: { 'type': 'array', 'itemType': GetStackExecutionResultResponseBodyStackResults },
      triggerId: 'string',
      triggeredStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.stackResults)) {
      $dara.Model.validateArray(this.stackResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

