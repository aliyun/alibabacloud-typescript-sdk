// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonSandboxTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * 1
   */
  defaultCpu?: string;
  /**
   * @example
   * 1Gi
   */
  defaultMemory?: string;
  /**
   * @example
   * 1
   */
  defaultReplicas?: number;
  /**
   * @example
   * Execute user-provided Python code in the sandbox environment. Runs any Python script the user provides and returns the output.
   */
  description?: string;
  /**
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
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
   */
  nextToken?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
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

