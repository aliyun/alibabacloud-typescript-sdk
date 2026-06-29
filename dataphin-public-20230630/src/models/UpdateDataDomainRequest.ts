// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataDomainRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the data domain.
   * 
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @remarks
   * The ID of the data board.
   * 
   * This parameter is required.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the data domain.
   * 
   * This parameter is required.
   * 
   * @example
   * 1241844456
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The description of the data domain.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the data domain.
   * 
   * This parameter is required.
   * 
   * @example
   * 主题域测试
   */
  displayName?: string;
  /**
   * @remarks
   * The code of the data domain.
   * 
   * This parameter is required.
   * 
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent data domain.
   * 
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
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
      dataDomainId: 'number',
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

export class UpdateDataDomainRequest extends $dara.Model {
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
   * The update request.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateDataDomainRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataDomainRequestUpdateCommand,
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

