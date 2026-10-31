// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataSourceRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * The deletion mode. Valid values:
   * - DEV: Deletes only the data source in the development environment.
   * - DEV_PROD: Deletes the data sources in both the development and production environments.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the data source in the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 13121
   */
  prodDataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      prodDataSourceId: 'ProdDataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      prodDataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The data source deletion request.
   * 
   * This parameter is required.
   */
  deleteCommand?: DeleteDataSourceRequestDeleteCommand;
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
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteDataSourceRequestDeleteCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

