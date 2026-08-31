// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDevProdProjectRequestCreateCommandWhiteLists extends $dara.Model {
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

export class CreateDevProdProjectRequestCreateCommand extends $dara.Model {
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
   * The project name.
   * 
   * This parameter is required.
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
  whiteLists?: CreateDevProdProjectRequestCreateCommandWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      devComputeSourceId: 'DevComputeSourceId',
      devDescription: 'DevDescription',
      devStreamComputeSourceId: 'DevStreamComputeSourceId',
      displayName: 'DisplayName',
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
      name: 'string',
      nameSpaceTag: 'string',
      prodComputeSourceId: 'number',
      prodDescription: 'string',
      prodStreamComputeSourceId: 'number',
      whiteLists: { 'type': 'array', 'itemType': CreateDevProdProjectRequestCreateCommandWhiteLists },
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

export class CreateDevProdProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateDevProdProjectRequestCreateCommand;
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateDevProdProjectRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
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

