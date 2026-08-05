// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonSandboxTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The default number of CPUs for sandboxes created by using this template.
   * 
   * @example
   * 1
   */
  defaultCpu?: string;
  /**
   * @remarks
   * The default memory size for sandboxes created by using this template. The unit ends with Gi.
   * 
   * @example
   * 1Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * The default number of prewarmed sandboxes.
   * 
   * @example
   * 1
   */
  defaultReplicas?: number;
  /**
   * @remarks
   * The description of the sandbox template.
   * 
   * @example
   * Execute user-provided Python code in the sandbox environment. Runs any Python script the user provides and returns the output.
   */
  description?: string;
  /**
   * @remarks
   * The name of the sandbox template.
   * 
   * @example
   * desktop
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpu: 'DefaultCpu',
      defaultMemory: 'DefaultMemory',
      defaultReplicas: 'DefaultReplicas',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      defaultReplicas: 'number',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonSandboxTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position from which the query starts. Set this parameter to empty to start from the beginning.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @remarks
   * The sandbox templates.
   */
  templates?: DescribeCommonSandboxTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeCommonSandboxTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

