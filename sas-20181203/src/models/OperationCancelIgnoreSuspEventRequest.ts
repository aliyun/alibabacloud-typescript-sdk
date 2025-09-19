// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationCancelIgnoreSuspEventRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark text
   */
  remark?: string;
  /**
   * @remarks
   * The IDs of alert events.
   * 
   * This parameter is required.
   */
  securityEventIds?: number[];
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      securityEventIds: 'SecurityEventIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      securityEventIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.securityEventIds)) {
      $dara.Model.validateArray(this.securityEventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

