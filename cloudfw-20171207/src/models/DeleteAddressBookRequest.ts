// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddressBookRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the address book.
   * 
   * > To obtain this ID, call the [DescribeAddressBook](~~DescribeAddressBook~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0657ab9d-fe8b-4174-b2a6-6baf358e****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
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
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

