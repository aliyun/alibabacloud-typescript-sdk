// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can be an empty string.
   * 
   * You can specify up to 20 tag values at a time.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a single request. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If NextToken is empty, no next query exists.
   * - If NextToken is returned, the value indicates the token for the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource instance IDs.
   * 
   * You can specify up to 20 resource instance IDs. If you exceed this limit, the IllegalParamSize.ResourceIds error is returned.
   * 
   * > You must specify at least one of ResourceId and Tag. Otherwise, the MissingParam.TagsAndResourceIds error is returned.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - **EXPRESSCONNECTROUTER**: Express Connect Router (ECR) instance.
   * - **EXPRESSCONNECTROUTERVPCASSOCIATION**: association between an ECR and a VPC.
   * - **EXPRESSCONNECTROUTERTRASSOCIATION**: association between an ECR and a transit router.
   * - **ECRFLOWLOG**: ECR flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESSCONNECTROUTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can bind up to 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

