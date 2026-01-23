// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardWordRootRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * avg
   */
  abbreviation?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * average
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 平均值
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      description: 'Description',
      fullName: 'FullName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      description: 'string',
      fullName: 'string',
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

export class CreateStandardWordRootRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateStandardWordRootRequestCreateCommand;
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
      createCommand: CreateStandardWordRootRequestCreateCommand,
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

