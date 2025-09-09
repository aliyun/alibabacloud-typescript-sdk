// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordEnableStatusRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @example
   * 1781234321
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableStatus: 'string',
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

