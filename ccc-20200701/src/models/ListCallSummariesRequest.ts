// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallSummariesRequest extends $dara.Model {
  contactIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdList: 'ContactIdList',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIdList)) {
      $dara.Model.validateArray(this.contactIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

