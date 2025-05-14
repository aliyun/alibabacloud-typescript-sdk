// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetConferenceHostsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * add
   */
  operationType?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [ "012345"]
   */
  userIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      operationType: 'OperationType',
      tenantContextShrink: 'TenantContext',
      userIdsShrink: 'UserIds',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationType: 'string',
      tenantContextShrink: 'string',
      userIdsShrink: 'string',
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

