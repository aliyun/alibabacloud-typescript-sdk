// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSharedAccountsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Namespace
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'accountIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

