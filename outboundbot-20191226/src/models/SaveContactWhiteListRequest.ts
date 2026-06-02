// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactWhiteListRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  contactWhiteListList?: string[];
  /**
   * @example
   * {}
   */
  contactWhiteListsJson?: string;
  /**
   * @remarks
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

