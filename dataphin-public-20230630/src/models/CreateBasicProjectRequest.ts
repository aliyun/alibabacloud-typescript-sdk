// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicProjectRequestCreateCommandWhiteLists extends $dara.Model {
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

export class CreateBasicProjectRequestCreateCommand extends $dara.Model {
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
   * The offline compute source ID.
   * 
   * @example
   * 2001
   */
  computeSourceId?: number;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * test project
   */
  description?: string;
  /**
   * @remarks
   * The project display name.
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
   * The real-time compute source ID.
   * 
   * @example
   * 2002
   */
  streamComputeSourceId?: number;
  /**
   * @remarks
   * The project type. If this parameter is left empty, the default value GENERAL is used.
   * 
   * @example
   * GENERAL
   */
  type?: string;
  /**
   * @remarks
   * The sandbox whitelist.
   */
  whiteLists?: CreateBasicProjectRequestCreateCommandWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      computeSourceId: 'ComputeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      nameSpaceTag: 'NameSpaceTag',
      streamComputeSourceId: 'StreamComputeSourceId',
      type: 'Type',
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      computeSourceId: 'number',
      description: 'string',
      displayName: 'string',
      name: 'string',
      nameSpaceTag: 'string',
      streamComputeSourceId: 'number',
      type: 'string',
      whiteLists: { 'type': 'array', 'itemType': CreateBasicProjectRequestCreateCommandWhiteLists },
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

export class CreateBasicProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBasicProjectRequestCreateCommand;
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
      createCommand: CreateBasicProjectRequestCreateCommand,
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

