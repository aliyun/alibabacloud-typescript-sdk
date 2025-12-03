// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  ref?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1.0
   */
  tagName?: string;
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
      message: 'message',
      ref: 'ref',
      tagName: 'tagName',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      message: 'string',
      ref: 'string',
      tagName: 'string',
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

