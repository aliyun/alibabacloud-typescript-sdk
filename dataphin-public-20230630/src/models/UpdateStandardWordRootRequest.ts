// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStandardWordRootRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the root word.
   * 
   * This parameter is required.
   * 
   * @example
   * avg
   */
  abbreviation?: string;
  /**
   * @remarks
   * The description of the root word.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The full name of the root word.
   * 
   * This parameter is required.
   * 
   * @example
   * average
   */
  fullName?: string;
  /**
   * @remarks
   * The name of the root word.
   * 
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  name?: string;
  /**
   * @remarks
   * The name of the root word before the update.
   * 
   * This parameter is required.
   * 
   * @example
   * 平均值
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
   * The update instruction.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateStandardWordRootRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

