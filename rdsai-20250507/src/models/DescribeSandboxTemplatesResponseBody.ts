// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
  createdBy?: string;
  /**
   * @remarks
   * The number of CPUs allocated to the sandbox created by using this template.
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
   * The description of the sandbox template.
   * 
   * @example
   * code-interpreter-vpc
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the sandbox created by using this template can access resources in the VPC where Supabase is deployed.
   * 
   * @example
   * true
   */
  enableVpcAccess?: string;
  image?: string;
  /**
   * @remarks
   * The name of the sandbox template.
   * 
   * @example
   * code-interpreter
   */
  name?: string;
  replicas?: number;
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the sandbox template. Specify this ID when you use the template to create a sandbox.
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
      image: 'Image',
      name: 'Name',
      replicas: 'Replicas',
      tags: 'Tags',
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
      image: 'string',
      name: 'string',
      replicas: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateId: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSandboxTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup parameter. You can ignore this parameter.
   * 
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the current read operation starts. An empty value indicates that the read operation starts from the beginning.
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
   * The number of entries per page.
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
   * The total number of data entries that meet the current request conditions.
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

