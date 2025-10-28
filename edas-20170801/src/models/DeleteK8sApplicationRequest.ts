// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to delete. You can call the ListApplication operation to query the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbac7e3c-****-49bc-b6de-ffc550018b45
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly delete the application and disable application deletion protection.
   * 
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

