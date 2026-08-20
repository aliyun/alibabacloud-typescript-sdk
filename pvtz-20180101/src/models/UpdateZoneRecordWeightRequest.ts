// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZoneRecordWeightRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. If you do not specify this parameter, the system automatically generates a value. To ensure uniqueness across different requests, the value cannot exceed 64 ASCII characters.
   * 
   * @example
   * 210bc45716943908285687176dcf0a
   */
  clientToken?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * This parameter is required.
   * 
   * @example
   * 5808
   */
  recordId?: number;
  /**
   * @remarks
   * The updated weight value `[0,100]`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
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

