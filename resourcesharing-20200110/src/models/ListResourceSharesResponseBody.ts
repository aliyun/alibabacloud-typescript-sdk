// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceSharesResponseBodyResourceSharesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
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

export class ListResourceSharesResponseBodyResourceShares extends $dara.Model {
  /**
   * @remarks
   * Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The time when the resource share was created.
   * 
   * @example
   * 2020-12-03T02:20:31.292Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz5nlvlak****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-PqysnzIj****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * @example
   * 151266687691****
   */
  resourceShareOwner?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active
   * *   Pending
   * *   Deleting
   * *   Deleted
   * 
   * >  The system automatically deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListResourceSharesResponseBodyResourceSharesTags[];
  /**
   * @remarks
   * The time when the resource share was updated.
   * 
   * @example
   * 2020-12-03T08:01:43.638Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceGroupId: 'ResourceGroupId',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceGroupId: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListResourceSharesResponseBodyResourceSharesTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceSharesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The `token` that is used to initiate the next request if the response of the current request is truncated. You can use the token to initiate another request and obtain the remaining records.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F23CFB6-A721-4E90-AC1E-0E30FA8B45DA
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource shares.
   */
  resourceShares?: ListResourceSharesResponseBodyResourceShares[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceShares: 'ResourceShares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceShares: { 'type': 'array', 'itemType': ListResourceSharesResponseBodyResourceShares },
    };
  }

  validate() {
    if(Array.isArray(this.resourceShares)) {
      $dara.Model.validateArray(this.resourceShares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

