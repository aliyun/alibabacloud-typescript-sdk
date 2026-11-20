// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cascade delete is enabled. If enabled, deleting the service group automatically deletes all services in the service group. Default value: false.
   * 
   * @example
   * false
   */
  cascadeDelete?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDelete: 'CascadeDelete',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDelete: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

