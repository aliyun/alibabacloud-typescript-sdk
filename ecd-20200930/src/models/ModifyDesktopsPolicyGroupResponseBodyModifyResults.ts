// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopsPolicyGroupResponseBodyModifyResults extends $dara.Model {
  /**
   * @remarks
   * The returned message. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-7w78ozhjcwa3u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The error message returned if the request failed. This parameter is not returned if the value of Code is success.``
   * 
   * @example
   * The specified param DesktopId ecd-ia2zw38bi6cm7**** is not found.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

