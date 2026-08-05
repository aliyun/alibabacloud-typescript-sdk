// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyResultQuota extends $dara.Model {
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
   * rag.share.common
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

export class GetWorkspaceResponseBodyResultTags extends $dara.Model {
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
   * x
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

export class GetWorkspaceResponseBodyResult extends $dara.Model {
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
   * The commodity code.
   * 
   * @example
   * commodityCode
   */
  commodityCode?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 描述
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
   * default
   */
  name?: string;
  /**
   * @remarks
   * The quota.
   */
  quota?: GetWorkspaceResponseBodyResultQuota;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzaowqymbb4ki
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ""
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetWorkspaceResponseBodyResultTags[];
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
      commodityCode: 'commodityCode',
      description: 'description',
      domainName: 'domainName',
      engineType: 'engineType',
      id: 'id',
      instanceId: 'instanceId',
      name: 'name',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiToken: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      description: 'string',
      domainName: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      quota: GetWorkspaceResponseBodyResultQuota,
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetWorkspaceResponseBodyResultTags },
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

export class GetWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 58113A95-1858-5674-87E5-192AEE6FD9DD
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetWorkspaceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetWorkspaceResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

