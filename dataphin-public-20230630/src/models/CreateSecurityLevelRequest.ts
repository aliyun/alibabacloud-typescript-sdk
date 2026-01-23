// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityLevelRequestCreateCommand extends $dara.Model {
  /**
   * @example
   * test
   */
  abbreviation?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      description: 'Description',
      index: 'Index',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
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

export class CreateSecurityLevelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateSecurityLevelRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateSecurityLevelRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

