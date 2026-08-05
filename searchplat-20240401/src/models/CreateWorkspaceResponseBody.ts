// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResponseBodyResultQuota extends $dara.Model {
  /**
   * @remarks
   * Compute resource
   * 
   * @example
   * 0
   */
  computeResource?: number;
  /**
   * @remarks
   * Storage capacity
   * 
   * @example
   * 0
   */
  docSize?: number;
  /**
   * @remarks
   * Specification
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

export class CreateWorkspaceResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * a
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value
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

export class CreateWorkspaceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Billing type
   * - POSTPAY: Pay-as-you-go
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Commodity code
   * 
   * @example
   * opensearch_platform_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Workspace description
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Custom domain name prefix
   * 
   * @example
   * defalult-xxxx
   */
  domainName?: string;
  /**
   * @remarks
   * Engine type
   * 
   * @example
   * rag
   */
  engineType?: string;
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 120142804
   */
  id?: string;
  /**
   * @remarks
   * Workspace instance ID
   * 
   * @example
   * ops-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Workspace name
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * Quota
   */
  quota?: CreateWorkspaceResponseBodyResultQuota;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tags
   */
  tags?: CreateWorkspaceResponseBodyResultTags[];
  /**
   * @remarks
   * Type
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
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
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      description: 'string',
      domainName: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      quota: CreateWorkspaceResponseBodyResultQuota,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateWorkspaceResponseBodyResultTags },
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

export class CreateWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2BA0504F-B179-586D-8210-A7C7C09A9907
   */
  requestId?: string;
  /**
   * @remarks
   * Response result
   */
  result?: CreateWorkspaceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateWorkspaceResponseBodyResult,
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

