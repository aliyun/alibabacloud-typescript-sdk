// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactBlockListRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  contactBlockListList?: string[];
  /**
   * @example
   * {}
   */
  contactBlockListsJson?: string;
  /**
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

