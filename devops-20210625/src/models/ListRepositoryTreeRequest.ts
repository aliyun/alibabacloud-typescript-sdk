// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryTreeRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 624666bd54d036291ae13a36
   */
  organizationId?: string;
  /**
   * @example
   * module
   */
  path?: string;
  /**
   * @example
   * master / tag1.0 / sjjfssa
   */
  refName?: string;
  /**
   * @example
   * RECURSIVE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      organizationId: 'organizationId',
      path: 'path',
      refName: 'refName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      path: 'string',
      refName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

