// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrefixListRequestEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block in entry N. Valid values of N: 0 to 200. Take note of the following items:
   * 
   * *   The total number of entries cannot exceed the `MaxEntries` value.
   * *   CIDR block types are determined by the IP address family. You cannot combine IPv4 and IPv6 CIDR blocks in a single prefix list.
   * *   CIDR blocks must be unique across all entries in a prefix list. For example, you cannot specify 192.168.1.0/24 twice in the entries of the prefix list.
   * *   IP addresses are supported. The system converts IP addresses into CIDR blocks. For example, if you specify 192.168.1.100, the system converts it into the 192.168.1.100/32 CIDR block.
   * *   If an IPv6 CIDR block is used, the system converts it into the zero compression format and changes uppercase letters into lowercase ones. For example, if you specify 2001:0DB8:0000:0000:0000:0000:0000:0000/32, the system converts it into 2001:db8::/32.
   * 
   * For more information about CIDR blocks, see the [What is CIDR?](https://help.aliyun.com/document_detail/40637.html#title-gu4-uzk-12r) section in the "Network FAQ" topic.
   * 
   * This parameter is empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description in entry N. The description must be 2 to 32 characters in length and cannot start with `http://` or `https://`. Valid values of N: 0 to 200.
   * 
   * @example
   * Description Sample 01
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

