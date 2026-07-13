// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordWeightRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that ensures the idempotence of the request. Generate a unique token for each request. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 17363242424
   */
  recordId?: string;
  /**
   * @remarks
   * The weight. The value can be an integer from 0 to 100.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      recordId: 'RecordId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      recordId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

