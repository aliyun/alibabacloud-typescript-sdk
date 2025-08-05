// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAddressBookRequestTagList extends $dara.Model {
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

export class AddAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The addresses that you want to add to the address book. Separate multiple addresses with commas (,).
   * 
   * >  If you set GroupType to `ip`, `port` or `domain`, you must specify AddressList.
   * 
   * *   If you set GroupType to `ip`, you must add IP addresses to the address book. Example: 192.0.XX.XX/32,192.0.XX.XX/24.
   * *   If you set GroupType to `port`, you must add port numbers or port ranges to the address book. Example: 80,100/200.
   * *   If you set GroupType to `domain`, you must add domain names to the address book. Example: example.com,aliyundoc.com.
   * 
   * @example
   * 192.0.XX.XX/32, 192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add public IP addresses of ECS instances to the address book if the instances match the specified tags. Valid values:
   * 
   * *   **1**: yes
   * *   **0** (default): no
   * 
   * @example
   * 1
   */
  autoAddTagEcs?: string;
  /**
   * @remarks
   * The description of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  description?: string;
  /**
   * @remarks
   * The name of the address book.
   * 
   * This parameter is required.
   * 
   * @example
   * sz-001
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the address book. Valid values:
   * 
   * *   **ip**: IP address book
   * *   **domain**: domain address book
   * *   **port**: port address book
   * *   **tag**: ECS tag-based address book
   * 
   * This parameter is required.
   * 
   * @example
   * ip
   */
  groupType?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * The ECS tags that you want to match.
   */
  tagList?: AddAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relation among the ECS tags that you want to match. Valid values:
   * 
   * *   **and** (default): Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
   * *   **or**: The public IP addresses of ECS instances that match one of the specified tags can be added to the address book.
   * 
   * @example
   * and
   */
  tagRelation?: string;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      autoAddTagEcs: 'AutoAddTagEcs',
      description: 'Description',
      groupName: 'GroupName',
      groupType: 'GroupType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      tagList: 'TagList',
      tagRelation: 'TagRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupType: 'string',
      lang: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': AddAddressBookRequestTagList },
      tagRelation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

