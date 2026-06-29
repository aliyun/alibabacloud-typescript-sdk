// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceAppRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 200000000
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application key, which must be globally unique and is used when calling APIs.
   * The key must be 8 to 128 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * This parameter can be customized only when using Alibaba Cloud API Gateway or the built-in gateway. This parameter is ignored when using a dedicated cloud gateway.
   * 
   * @example
   * 200000001
   */
  appKey?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * 默认应用
   */
  appName?: string;
  /**
   * @remarks
   * The app secret.
   * If this parameter is not specified, the system automatically generates a new AppSecret value.
   * The secret must be 8 to 127 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * This parameter can be customized only when using Alibaba Cloud API Gateway or the built-in gateway. This parameter is ignored when using a dedicated cloud gateway.
   * 
   * @example
   * abc123456789
   */
  appSecret?: string;
  /**
   * @remarks
   * The list of owner IDs.
   * 
   * This parameter is required.
   */
  ownerIds?: string[];
  /**
   * @remarks
   * Common scenarios.
   * 
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
   * The command to create a data service application.
   * 
   * This parameter is required.
   */
  createCommand?: CreateDataServiceAppRequestCreateCommand;
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

