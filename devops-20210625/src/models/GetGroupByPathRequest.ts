// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupByPathRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957/test-group
   */
  identity?: string;
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
      identity: 'identity',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: 'string',
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

