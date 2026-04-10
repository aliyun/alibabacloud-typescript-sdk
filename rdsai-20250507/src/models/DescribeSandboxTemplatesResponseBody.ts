// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
  /**
   * @example
   * 2
   */
  defaultCpu?: string;
  /**
   * @example
   * 4Gi
   */
  defaultMemory?: string;
  /**
   * @example
   * code-interpreter-vpc
   */
  description?: string;
  /**
   * @example
   * true
   */
  enableVpcAccess?: string;
  /**
   * @example
   * code-interpreter
   */
  name?: string;
  /**
   * @example
   * code-interpreter-asdxxxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCpu: 'DefaultCpu',
      defaultMemory: 'DefaultMemory',
      description: 'Description',
      enableVpcAccess: 'EnableVpcAccess',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCpu: 'string',
      defaultMemory: 'string',
      description: 'string',
      enableVpcAccess: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxTemplatesResponseBody extends $dara.Model {
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
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  sandboxTemplates?: DescribeSandboxTemplatesResponseBodySandboxTemplates[];
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sandboxTemplates: 'SandboxTemplates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sandboxTemplates: { 'type': 'array', 'itemType': DescribeSandboxTemplatesResponseBodySandboxTemplates },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sandboxTemplates)) {
      $dara.Model.validateArray(this.sandboxTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

