// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCastersResponseBodyCasterListCasterTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
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

export class DescribeCastersResponseBodyCasterListCasterTags extends $dara.Model {
  tag?: DescribeCastersResponseBodyCasterListCasterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCastersResponseBodyCasterListCasterTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBodyCasterListCaster extends $dara.Model {
  casterId?: string;
  casterName?: string;
  casterTemplate?: string;
  channelEnable?: number;
  chargeType?: string;
  clientTokenId?: string;
  createTime?: string;
  duration?: string;
  expireTime?: string;
  lastModified?: string;
  normType?: number;
  purchaseTime?: string;
  resourceGroupId?: string;
  startTime?: string;
  status?: number;
  tags?: DescribeCastersResponseBodyCasterListCasterTags;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      casterName: 'CasterName',
      casterTemplate: 'CasterTemplate',
      channelEnable: 'ChannelEnable',
      chargeType: 'ChargeType',
      clientTokenId: 'ClientTokenId',
      createTime: 'CreateTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      lastModified: 'LastModified',
      normType: 'NormType',
      purchaseTime: 'PurchaseTime',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      casterName: 'string',
      casterTemplate: 'string',
      channelEnable: 'number',
      chargeType: 'string',
      clientTokenId: 'string',
      createTime: 'string',
      duration: 'string',
      expireTime: 'string',
      lastModified: 'string',
      normType: 'number',
      purchaseTime: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      status: 'number',
      tags: DescribeCastersResponseBodyCasterListCasterTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBodyCasterList extends $dara.Model {
  caster?: DescribeCastersResponseBodyCasterListCaster[];
  static names(): { [key: string]: string } {
    return {
      caster: 'Caster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caster: { 'type': 'array', 'itemType': DescribeCastersResponseBodyCasterListCaster },
    };
  }

  validate() {
    if(Array.isArray(this.caster)) {
      $dara.Model.validateArray(this.caster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCastersResponseBody extends $dara.Model {
  casterList?: DescribeCastersResponseBodyCasterList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b9676b3
   */
  requestId?: string;
  /**
   * @remarks
   * The number of production studios.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      casterList: 'CasterList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterList: DescribeCastersResponseBodyCasterList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.casterList && typeof (this.casterList as any).validate === 'function') {
      (this.casterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

