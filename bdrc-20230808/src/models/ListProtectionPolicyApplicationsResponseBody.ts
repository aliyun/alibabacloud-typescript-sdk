// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProtectionPolicyApplicationsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The error details, returned when the application fails.
   * 
   * @example
   * {"errorCode":"HbrPolicyNotFound","errorMessage":"po-123***7890"}
   */
  applyDetail?: string;
  /**
   * @remarks
   * The policy application status.
   * 
   * @example
   * FAILED
   */
  applyStatus?: string;
  /**
   * @remarks
   * The time the policy was applied.
   * 
   * @example
   * 2024-11-19T02:19:06Z
   */
  applyTime?: number;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The protection policy ID.
   * 
   * @example
   * p-123***7890
   */
  protectionPolicyId?: string;
  /**
   * @remarks
   * The resource ARN.
   * 
   * @example
   * acs:ecs:123***890:cn-shanghai:instance/i-001***90
   */
  resourceArn?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @example
   * 123***7890
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The sub-protection policy type.
   * 
   * @example
   * ECS_AUTO_SNAPSHOT_POLICY
   */
  subProtectionPolicyType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-0000e4w0u1v592zdf6s7
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applyDetail: 'ApplyDetail',
      applyStatus: 'ApplyStatus',
      applyTime: 'ApplyTime',
      productType: 'ProductType',
      protectionPolicyId: 'ProtectionPolicyId',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      subProtectionPolicyType: 'SubProtectionPolicyType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyDetail: 'string',
      applyStatus: 'string',
      applyTime: 'number',
      productType: 'string',
      protectionPolicyId: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      subProtectionPolicyType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPolicyApplicationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response content.
   */
  content?: ListProtectionPolicyApplicationsResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for retrieving the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * fb836242f4225fa0f0e0257362dfc6dd
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListProtectionPolicyApplicationsResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProtectionPolicyApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListProtectionPolicyApplicationsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34081B20-C4C0-514F-93F6-8EEC3D1A587E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProtectionPolicyApplicationsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

