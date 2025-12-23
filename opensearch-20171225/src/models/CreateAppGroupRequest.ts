// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppGroupRequestQuota extends $dara.Model {
  /**
   * @remarks
   * The computing resources. Unit: logical computing unit (LCU).
   * 
   * @example
   * 20
   */
  computeResource?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 1
   */
  docSize?: number;
  /**
   * @remarks
   * The specifications. Valid values:
   * 
   * *   opensearch.share.junior: basic
   * *   opensearch.share.common: shared general-purpose
   * *   opensearch.share.compute: shared computing
   * *   opensearch.share.storage: shared storage
   * *   opensearch.private.common: exclusive general-purpose
   * *   opensearch.private.compute: exclusive computing
   * *   opensearch.private.storage: exclusive storage
   * 
   * @example
   * opensearch.share.common
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

export class CreateAppGroupRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * a
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   POSTPAY: pay-as-you-go
   * *   PREPAY: subscription
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * jmbon_analyzer
   */
  name?: string;
  /**
   * @remarks
   * The quota.
   */
  quota?: CreateAppGroupRequestQuota;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm2ij6pwxsvua
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreateAppGroupRequestTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard
   * *   enhanced
   * 
   * @example
   * enhanced
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
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
      name: 'string',
      quota: CreateAppGroupRequestQuota,
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateAppGroupRequestTags },
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

