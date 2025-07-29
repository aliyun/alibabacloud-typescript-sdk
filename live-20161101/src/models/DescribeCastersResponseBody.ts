// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCastersResponseBodyCasterListCasterTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The ID of the production studio. You can specify the ID in a request to query the streaming URLs of the production studio, start the production studio, add a video resource, a layout, a component, or a playlist to the production studio, or query layouts of the production studio.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The name of the production studio.
   * 
   * @example
   * liveCaster****
   */
  casterName?: string;
  /**
   * @remarks
   * The resolution in which the production studio plays videos. This parameter is returned if the subscription billing method is used. Valid values:
   * 
   * *   lp_ld: low definition
   * *   lp_sd: standard definition
   * *   lp_hd: high definition
   * *   lp_ud: ultra high definition.
   * *   lp_ld_v: low definition (portrait mode)
   * *   lp_sd_v: standard definition (portrait mode)
   * *   lp_hd_v: high definition (portrait mode)
   * *   lp_ud_v: ultra high definition (portrait mode)
   * 
   * @example
   * lp_ld
   */
  casterTemplate?: string;
  /**
   * @remarks
   * Indicates whether the channel is enabled for the production studio.
   * 
   * *   0: The channel is disabled.
   * *   1: The channel is enabled.
   * 
   * @example
   * 1
   */
  channelEnable?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method
   * *   PostPaid: the pay-as-you-go billing method
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  clientTokenId?: string;
  /**
   * @remarks
   * The time when the production studio was created.
   * 
   * @example
   * 2017-08-30 12:02:57.0
   */
  createTime?: string;
  /**
   * @remarks
   * The streaming duration. Format: hh:mm:ss.
   * 
   * @example
   * 1:02:33
   */
  duration?: string;
  /**
   * @remarks
   * The time when the production studio expires.
   * 
   * @example
   * 2018-08-30 12:02:57.0
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the production studio was last modified. For example, the time when the production studio was last started, stopped, or modified is returned.
   * 
   * @example
   * 2021-12-01T05:08:45Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The type of the production studio. Valid values:
   * 
   * *   0: playlist mode
   * *   1: general mode
   * 
   * @example
   * 1
   */
  normType?: number;
  /**
   * @remarks
   * The time when the production studio was purchased.
   * 
   * @example
   * 2017-08-30 12:02:57.0
   */
  purchaseTime?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time when the production studio was started. This parameter is returned if the production studio is in the streaming status.
   * 
   * @example
   * 2017-08-30 18:02:57.0
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the production studio. Valid values:
   * 
   * *   0: idle
   * *   1: streaming
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tags.
   */
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
  /**
   * @remarks
   * The production studios.
   */
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

