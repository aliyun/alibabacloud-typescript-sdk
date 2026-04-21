// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  userCountLimit?: number;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      userCountLimit: 'UserCountLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      userCountLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

