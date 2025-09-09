// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionRecordWeightRequest extends $dara.Model {
  /**
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @example
   * 17363242424
   */
  recordId?: string;
  /**
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

