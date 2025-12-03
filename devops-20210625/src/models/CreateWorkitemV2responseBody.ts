// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemV2ResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidTagGroup.IdNotFound
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorMessage?: string;
  /**
   * @example
   * EAE03103-5497-58D1-9169-E524DDE8604C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 11234455454355
   */
  workitemIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
      workitemIdentifier: 'workitemIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
      workitemIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

