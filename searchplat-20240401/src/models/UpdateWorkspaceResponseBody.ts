// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceResponseBodyResultQuota extends $dara.Model {
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

export class UpdateWorkspaceResponseBodyResultTags extends $dara.Model {
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
   * v
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

export class UpdateWorkspaceResponseBodyResult extends $dara.Model {
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
   * Indicates whether the production is complete. Valid values:
   * - 0: In production.
   * - 1: Production complete.
   * 
   * @example
   * 1
   */
  produced?: number;
  /**
   * @remarks
   * The quota.
   */
  quota?: UpdateWorkspaceResponseBodyResultQuota;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aeky6pyhbh6j3dy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: UpdateWorkspaceResponseBodyResultTags[];
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
      chargeType: 'chargeType',
      description: 'description',
      domainName: 'domainName',
      engineType: 'engineType',
      id: 'id',
      instanceId: 'instanceId',
      name: 'name',
      produced: 'produced',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      description: 'string',
      domainName: 'string',
      engineType: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      produced: 'number',
      quota: UpdateWorkspaceResponseBodyResultQuota,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateWorkspaceResponseBodyResultTags },
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

export class UpdateWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B7C901ED-2BC1-5CFB-BE23-242DE5E3BA5C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: UpdateWorkspaceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWorkspaceResponseBodyResult,
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

