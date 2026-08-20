// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomOrgResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * string_value
   */
  corpName?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The platform type.
   * 
   * @example
   * string_value
   */
  platformType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72D1EC35-B174-5595-891F-2F0B3BFBE56F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      corpId: 'corpId',
      corpName: 'corpName',
      message: 'message',
      platformType: 'platformType',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      corpId: 'string',
      corpName: 'string',
      message: 'string',
      platformType: 'string',
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

