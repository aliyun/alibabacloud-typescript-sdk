// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactBlockListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of contacts. [Deprecated]
   * 
   * @example
   * []
   */
  contactBlockListList?: string[];
  /**
   * @remarks
   * A JSON string that contains the blocklist. This parameter is required.
   * 
   * - phoneNumber: The mobile phone number.
   * 
   * - remark: The remarks.
   * 
   * - name: The name.
   * 
   * - creator: The creator.
   * 
   * @example
   * [{"phoneNumber":"132322","remark":"123321","name":"ccc1","creator":"ccc222"}]
   */
  contactBlockListsJson?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required.
   * 
   * @example
   * c3c92de8-e4bd-4db4-a962-50f8acce40bc
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListList: 'ContactBlockListList',
      contactBlockListsJson: 'ContactBlockListsJson',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListList: { 'type': 'array', 'itemType': 'string' },
      contactBlockListsJson: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactBlockListList)) {
      $dara.Model.validateArray(this.contactBlockListList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

