// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentificationResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

