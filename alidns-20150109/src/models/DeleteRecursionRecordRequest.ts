// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecursionRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that ensures the idempotence of the request. The client generates this value. It must be unique across requests. The value can be up to 64 ASCII characters long.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the DNS record. This is the unique identifier for the record.
   * 
   * This parameter is required.
   * 
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

