// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationsRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  accessLevel?: number;
  accessToken?: string;
  /**
   * @example
   * 60
   */
  minAccessLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      accessToken: 'accessToken',
      minAccessLevel: 'minAccessLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      accessToken: 'string',
      minAccessLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

