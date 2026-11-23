// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecr-897j0jooxyr1aq****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * - **EXPRESSCONNECTROUTER**: Express Connect Router (ECR) instance.
   * - **EXPRESSCONNECTROUTERVPCASSOCIATION**: association between an ECR and a VPC.
   * - **EXPRESSCONNECTROUTERTRASSOCIATION**: association between an ECR and a transit router.
   * - **ECRFLOWLOG**: ECR flow log.
   * 
   * @example
   * EXPRESSCONNECTROUTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The label value of the Express Connect Router (ECR).
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. Other values indicate failure. For more information, see error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **True**: The call was successful.
   * - **False**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

