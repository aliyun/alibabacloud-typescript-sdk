// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAddressBookRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The key of ECS tag N that you want to match.
   * 
   * @example
   * TXY
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of ECS tag N that you want to match.
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

export class ModifyAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The addresses in the address book. Separate multiple addresses with commas (,). If you set GroupType to **ip**, **port**, or **domain**, you must specify this parameter.
   * 
   * *   If you set GroupType to **ip**, you must specify IP addresses for the address book. Example: 1.2.XX.XX/32,1.2.XX.XX/24.
   * *   If you set GroupType to **port**, you must specify port numbers or port ranges for the address book. Example: 80/80,100/200.
   * *   If you set GroupType to **domain**, you must specify domain names for the address book. Example: demo1.aliyun.com,demo2.aliyun.com.
   * 
   * @example
   * 192.0.XX.XX/32, 192.0.XX.XX/24
   */
  addressList?: string;
  /**
   * @remarks
   * Specifies whether to automatically add public IP addresses of Elastic Compute Service (ECS) instances to the address book if the instances match the specified tags. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
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
   * bj-001
   */
  description?: string;
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
   * The ID of the address book.
   * 
   * >  To modify the address book, you must provide the ID of the address book. You can call the [DescribeAddressBook](https://help.aliyun.com/document_detail/138869.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Modification mode with the following values:
   * 
   * - **Cover**: Use the value of the AddressList parameter to overwrite the original address book.
   * - **Append**: After the original address book, append addresses using the value of the AddressList parameter.
   * - **Delete**: Delete addresses using the value of the AddressList parameter from the address book.
   * 
   * >When GroupType is **ip**, **ipv6**, **port**, or **domain**, if this parameter is not configured, the default is to use the **Cover** method to modify the address book.
   * >Notice: When GroupType is **tag**, this parameter must be empty.</notice>
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
   * The ECS tags that you want to match.
   */
  tagList?: ModifyAddressBookRequestTagList[];
  /**
   * @remarks
   * The logical relationship among ECS tags. Valid values:
   * 
   * *   **and**: Only the public IP addresses of ECS instances that match all the specified tags can be added to the address book.
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
      addressList: 'string',
      autoAddTagEcs: 'string',
      description: 'string',
      groupName: 'string',
      groupUuid: 'string',
      lang: 'string',
      modifyMode: 'string',
      sourceIp: 'string',
      tagList: { 'type': 'array', 'itemType': ModifyAddressBookRequestTagList },
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

