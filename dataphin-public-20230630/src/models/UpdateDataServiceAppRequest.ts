// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataServiceAppRequestUpdateCommand extends $dara.Model {
  /**
   * @example
   * 200000000
   */
  appGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @example
   * 默认应用
   */
  appName?: string;
  ownerIds?: string[];
  /**
   * @example
   * 数据分析
   */
  scenarios?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      appName: 'AppName',
      ownerIds: 'OwnerIds',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appId: 'number',
      appName: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'string' },
      scenarios: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDataServiceAppRequest extends $dara.Model {
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
  updateCommand?: UpdateDataServiceAppRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateDataServiceAppRequestUpdateCommand,
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

