// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the newly created rule template.
   * 
   * @example
   * USER-DEFINED:2001
   */
  id?: string;
  /**
   * @remarks
   * The API request ID, which is generated as a UUID.
   * 
   * @example
   * 0bc14115***159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

