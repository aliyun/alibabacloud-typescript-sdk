// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * The compute resource.
   * 
   * @example
   * 0
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 0
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications.
   * 
   * @example
   * rag.share.compute
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'computeResource',
      docSize: 'docSize',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'number',
      docSize: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * a
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * c
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListWorkspacesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * apiToken
   * 
   * @example
   * apiToken
   */
  apiToken?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * - POSTPAY: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 22222
   */
  description?: string;
  /**
   * @remarks
   * The custom domain name prefix.
   * 
   * @example
   * default-xxx
   */
  domainName?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * rag
   */
  engineType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1222212
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ops-cn-em93wcq0s001
   */
  instanceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The quota information.
   */
  quota?: ListWorkspacesResponseBodyResultQuota;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzvlxzgo5b4si
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListWorkspacesResponseBodyResultTags[];
  /**
   * @remarks
   * The type.
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiToken: 'apiToken',
      chargeType: 'chargeType',
      description: 'description',
      domainName: 'domainName',
      engineType: 'engineType',
      id: 'id',
      instanceId: 'instanceId',
      name: 'name',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiToken: 'string',
      chargeType: 'string',
      description: 'string',
      domainName: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      quota: ListWorkspacesResponseBodyResultQuota,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyResultTags },
      type: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 33E4F0CA-F766-5803-B11C-70DC57A5A6E4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListWorkspacesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

