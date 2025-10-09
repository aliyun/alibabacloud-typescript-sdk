// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API request ID, which is generated as a UUID.
   * 
   * @example
   * 0bc14115****159376359
   */
  requestId?: string;
  /**
   * @remarks
   * Deleted
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

