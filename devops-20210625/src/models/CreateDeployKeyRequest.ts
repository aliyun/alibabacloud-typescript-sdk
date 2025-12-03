// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeployKeyRequest extends $dara.Model {
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
   * ""
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      key: 'key',
      title: 'title',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      key: 'string',
      title: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

