// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceAppRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200000000
   */
  appGroupId?: number;
  /**
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 默认应用
   */
  appName?: string;
  /**
   * @example
   * abc123456789
   */
  appSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 数据分析
   */
  scenarios?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
      appName: 'AppName',
      appSecret: 'AppSecret',
      ownerIds: 'OwnerIds',
      scenarios: 'Scenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
      appName: 'string',
      appSecret: 'string',
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

export class CreateDataServiceAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateDataServiceAppRequestCreateCommand;
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
      createCommand: CreateDataServiceAppRequestCreateCommand,
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

