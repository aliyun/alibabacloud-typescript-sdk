// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataServiceAppRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 200000000
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Default application
   */
  appName?: string;
  /**
   * @remarks
   * The owner IDs.
   */
  ownerIds?: string[];
  /**
   * @remarks
   * The common scenarios.
   * 
   * @example
   * Data analytics
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
   * The operator ID.
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
  updateCommand?: UpdateDataServiceAppRequestUpdateCommand;
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

