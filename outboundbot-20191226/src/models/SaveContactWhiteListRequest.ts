// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The contact whitelist. This parameter is deprecated.
   * 
   * @example
   * {}
   */
  contactWhiteListList?: string[];
  /**
   * @remarks
   * The whitelist. This parameter is required.
   * 
   * @example
   * [{"phoneNumber":"132322","remark":"123321","name":"ccc1","creator":"ccc222"}]
   */
  contactWhiteListsJson?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * c415bb6c-2e6f-46aa-afd9-3b65b6dbe2bc
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListList: 'ContactWhiteListList',
      contactWhiteListsJson: 'ContactWhiteListsJson',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactWhiteListList: { 'type': 'array', 'itemType': 'string' },
      contactWhiteListsJson: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactWhiteListList)) {
      $dara.Model.validateArray(this.contactWhiteListList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

