// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecursionRecordRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * 17432432424
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

