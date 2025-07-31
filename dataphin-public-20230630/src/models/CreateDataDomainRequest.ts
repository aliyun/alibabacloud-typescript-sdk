// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataDomainRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
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
   * 主题域测试
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateDataDomainRequestCreateCommand;
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
      createCommand: CreateDataDomainRequestCreateCommand,
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

