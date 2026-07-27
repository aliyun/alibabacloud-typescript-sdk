// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
  createdBy?: string;
  /**
   * @remarks
   * The number of CPUs for the sandbox created by using this template.
   * 
   * @example
   * 2
   */
  defaultCpu?: string;
  /**
   * @remarks
   * The memory size of the sandbox created by using this template.
   * 
   * @example
   * 4Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * The sandbox template description.
   * 
   * @example
   * code-interpreter-vpc
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the sandbox created by using this template can access resources within the VPC where Supabase resides.
   * 
   * @example
   * true
   */
  enableVpcAccess?: string;
  /**
   * @remarks
   * The sandbox template name.
   * 
   * @example
   * code-interpreter
   */
  name?: string;
  replicas?: number;
  /**
   * @remarks
   * The sandbox template ID. Specify this ID when you create a sandbox by using this template.
   * 
   * @example
   * code-interpreter-asdxxxx
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      defaultCpu: 'DefaultCpu',
      defaultMemory: 'DefaultMemory',
      description: 'Description',
      enableVpcAccess: 'EnableVpcAccess',
      name: 'Name',
      replicas: 'Replicas',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      defaultCpu: 'string',
      defaultMemory: 'string',
      description: 'string',
      enableVpcAccess: 'string',
      name: 'string',
      replicas: 'number',
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
   * @remarks
   * A reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which to start the current read. An empty value indicates that the read starts from the beginning.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
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
  /**
   * @remarks
   * The list of sandbox templates.
   */
  sandboxTemplates?: DescribeSandboxTemplatesResponseBodySandboxTemplates[];
  /**
   * @remarks
   * The total number of records that match the query conditions. This is an optional response element and may not be returned by default.
   * 
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

