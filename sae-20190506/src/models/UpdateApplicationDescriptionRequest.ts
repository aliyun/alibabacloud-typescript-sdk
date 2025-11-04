// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the application. The description can be up to 1,024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * newdesc
   */
  appDescription?: string;
  /**
   * @remarks
   * The ID of the application that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appDescription: 'AppDescription',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDescription: 'string',
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

