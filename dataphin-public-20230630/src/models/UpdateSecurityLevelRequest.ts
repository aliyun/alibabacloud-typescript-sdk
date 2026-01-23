// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityLevelRequestUpdateCommand extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      index: 'Index',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      index: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityLevelRequest extends $dara.Model {
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
  updateCommand?: UpdateSecurityLevelRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateSecurityLevelRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

