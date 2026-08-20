// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of a request. The client generates this value, which must be unique across different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6447728c8578e66aacf062d2df4446dc
   */
  clientToken?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en.
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
   * 202991****
   */
  recordId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test record
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'Lang',
      recordId: 'RecordId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
      recordId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

