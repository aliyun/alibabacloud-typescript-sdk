// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardWordRootRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the word root.
   * 
   * This parameter is required.
   * 
   * @example
   * avg
   */
  abbreviation?: string;
  /**
   * @remarks
   * The description of the word root.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The full name of the word root.
   * 
   * This parameter is required.
   * 
   * @example
   * average
   */
  fullName?: string;
  /**
   * @remarks
   * The name of the word root.
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  name?: string;
  /**
   * @remarks
   * The original name of the word root.
   * 
   * This parameter is required.
   * 
   * @example
   * Average
   */
  oldName?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      description: 'Description',
      fullName: 'FullName',
      name: 'Name',
      oldName: 'OldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      description: 'string',
      fullName: 'string',
      name: 'string',
      oldName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStandardWordRootRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateStandardWordRootRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateStandardWordRootRequestUpdateCommand,
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

