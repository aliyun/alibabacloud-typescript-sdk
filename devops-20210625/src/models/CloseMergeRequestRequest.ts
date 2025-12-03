// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseMergeRequestRequest extends $dara.Model {
  /**
   * @example
   * 0cf2c8458ac44d9481aab2dd6ec10596v3
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
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

