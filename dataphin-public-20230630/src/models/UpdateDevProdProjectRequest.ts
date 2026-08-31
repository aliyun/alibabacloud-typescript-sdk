// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDevProdProjectRequestUpdateCommandWhiteLists extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * IP
   * 
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 8080
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ip: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevProdProjectRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 1001
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The ID of the offline compute source in the development environment.
   * 
   * @example
   * 2001
   */
  devComputeSourceId?: number;
  /**
   * @remarks
   * The description of the development environment.
   * 
   * @example
   * dev desc
   */
  devDescription?: string;
  /**
   * @remarks
   * The ID of the real-time compute source in the development environment.
   * 
   * @example
   * 2002
   */
  devStreamComputeSourceId?: number;
  /**
   * @remarks
   * The display name of the project.
   * 
   * @example
   * My project.
   */
  displayName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * my_project
   */
  name?: string;
  /**
   * @remarks
   * The namespace identifier.
   * 
   * @example
   * dev
   */
  nameSpaceTag?: string;
  /**
   * @remarks
   * The ID of the offline compute source in the production environment.
   * 
   * @example
   * 2003
   */
  prodComputeSourceId?: number;
  /**
   * @remarks
   * The description of the production environment.
   * 
   * @example
   * prod desc
   */
  prodDescription?: string;
  /**
   * @remarks
   * The ID of the real-time compute source in the production environment.
   * 
   * @example
   * 2004
   */
  prodStreamComputeSourceId?: number;
  /**
   * @remarks
   * The sandbox whitelist.
   */
  whiteLists?: UpdateDevProdProjectRequestUpdateCommandWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      devComputeSourceId: 'DevComputeSourceId',
      devDescription: 'DevDescription',
      devStreamComputeSourceId: 'DevStreamComputeSourceId',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      nameSpaceTag: 'NameSpaceTag',
      prodComputeSourceId: 'ProdComputeSourceId',
      prodDescription: 'ProdDescription',
      prodStreamComputeSourceId: 'ProdStreamComputeSourceId',
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      devComputeSourceId: 'number',
      devDescription: 'string',
      devStreamComputeSourceId: 'number',
      displayName: 'string',
      id: 'number',
      name: 'string',
      nameSpaceTag: 'string',
      prodComputeSourceId: 'number',
      prodDescription: 'string',
      prodStreamComputeSourceId: 'number',
      whiteLists: { 'type': 'array', 'itemType': UpdateDevProdProjectRequestUpdateCommandWhiteLists },
    };
  }

  validate() {
    if(Array.isArray(this.whiteLists)) {
      $dara.Model.validateArray(this.whiteLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDevProdProjectRequest extends $dara.Model {
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
  updateCommand?: UpdateDevProdProjectRequestUpdateCommand;
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
      updateCommand: UpdateDevProdProjectRequestUpdateCommand,
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

