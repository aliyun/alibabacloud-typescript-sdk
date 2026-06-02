// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClientsRequest extends $dara.Model {
  /**
   * @remarks
   * aliuid
   * 
   * @example
   * ***
   */
  callerAliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * True
   */
  inManage?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      callerAliUid: 'CallerAliUid',
      inManage: 'InManage',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerAliUid: 'string',
      inManage: 'boolean',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

