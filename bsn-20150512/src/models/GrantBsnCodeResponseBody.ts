// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantBsnCodeResponseBody extends $dara.Model {
  /**
   * @example
   * 456*******163
   */
  aliUid?: number;
  /**
   * @example
   * 124*******345
   */
  grantToAliuid?: number;
  notes?: string;
  /**
   * @example
   * FA30A2AF-9542-5927-9B73-2030F1A68DBF
   */
  requestId?: string;
  /**
   * @example
   * 1131-*******-233
   */
  sn?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      grantToAliuid: 'GrantToAliuid',
      notes: 'Notes',
      requestId: 'RequestId',
      sn: 'Sn',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      grantToAliuid: 'number',
      notes: 'string',
      requestId: 'string',
      sn: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

