// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTenantMemberRequestRemoveCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123@xx.com
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTenantMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommand?: RemoveTenantMemberRequestRemoveCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommand: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommand: RemoveTenantMemberRequestRemoveCommand,
    };
  }

  validate() {
    if(this.removeCommand && typeof (this.removeCommand as any).validate === 'function') {
      (this.removeCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

