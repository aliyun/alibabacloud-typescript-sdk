// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
  createdBy?: string;
  /**
   * @remarks
   * The default number of CPUs for a sandbox created from this template.
   * 
   * @example
   * 2
   */
  defaultCpu?: string;
  /**
   * @remarks
   * The default memory size for a sandbox created from this template.
   * 
   * @example
   * 4Gi
   */
  defaultMemory?: string;
  /**
   * @remarks
   * The description of the sandbox template.
   * 
   * @example
   * code-interpreter-vpc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether sandboxes created from this template can access resources in the VPC of the parent RDS Supabase instance.
   * 
   * @example
   * true
   */
  enableVpcAccess?: string;
  /**
   * @remarks
   * The name of the sandbox template.
   * 
   * @example
   * code-interpreter
   */
  name?: string;
  replicas?: number;
  /**
   * @remarks
   * The ID of the sandbox template. Use this ID when you create a sandbox.
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
   * This parameter is reserved.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is empty, all results have been returned.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of sandbox templates.
   */
  sandboxTemplates?: DescribeSandboxTemplatesResponseBodySandboxTemplates[];
  /**
   * @remarks
   * The total number of entries that match the query.
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

