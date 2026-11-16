// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the studio. The name can be up to 50 characters in length and cannot contain single quotation marks, semicolons, less than signs, greater than signs, equal signs, vertical lines, or parentheses.
   * 
   * This parameter is required.
   * 
   * @example
   * Video production studio
   */
  title?: string;
  /**
   * @remarks
   * The maximum number of users allowed in the studio team. Valid values: 2 to 1000.
   * 
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

