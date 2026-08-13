// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAddressBookShrinkRequestAckLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label for pods in the ACK cluster.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The value of the label for pods in the ACK cluster.
   * 
   * @example
   * storage-operator
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

export class ModifyAddressBookShrinkRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the ECS tag.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the ECS tag.
   * 
   * @example
   * 1
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

export class ModifyAddressBookShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of labels for pods in the ACK cluster.
   */
  ackLabels?: ModifyAddressBookShrinkRequestAckLabels[];
  /**
   * @remarks
   * The list of namespaces for pods in the ACK cluster.
   */
  ackNamespaces?: string[];
  /**
   * @remarks
   * The addresses in the address book. Separate multiple addresses with commas (,). Use a space to separate an address from its description. This parameter is required when GroupType is set to **ip**, **port**, or **domain**.
   * 
   * @example
   * 192.0.XX.XX/32 ,192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * The list of member accounts in the asset address book.
   */
  assetMemberUidsShrink?: string;
  /**
   * @remarks
   * The cloud address book, including the list of regions and resource types.
   */
  assetRegionResourceTypesShrink?: string;
  /**
   * @remarks
   * Indicates whether the public IP addresses of Elastic Compute Service (ECS) instances that match the specified tags are automatically added to the address book.
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * ddadxefexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * bj-001
   */
  groupName?: string;
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The modification mode.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  /**
   * @remarks
   * The list of ECS tags.
   */
  tagList?: ModifyAddressBookShrinkRequestTagList[];
  /**
   * @remarks
   * The logical relationship among multiple ECS tags.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      ackLabels: 'AckLabels',
      ackNamespaces: 'AckNamespaces',
      addressList: 'AddressList',
      assetMemberUidsShrink: 'AssetMemberUids',
      assetRegionResourceTypesShrink: 'AssetRegionResourceTypes',
      autoAddTagEcs: 'AutoAddTagEcs',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      groupName: 'GroupName',
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      modifyMode: 'ModifyMode',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ackLabels: { 'type': 'array', 'itemType': ModifyAddressBookShrinkRequestAckLabels },
      ackNamespaces: { 'type': 'array', 'itemType': 'string' },
      addressList: 'string',
      assetMemberUidsShrink: 'string',
      assetRegionResourceTypesShrink: 'string',
      autoAddTagEcs: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      groupName: 'string',
      groupUuid: 'string',
      lang: 'string',
      modifyMode: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookShrinkRequestTagList },
      tagRelation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ackLabels)) {
      $dara.Model.validateArray(this.ackLabels);
    }
    if(Array.isArray(this.ackNamespaces)) {
      $dara.Model.validateArray(this.ackNamespaces);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

