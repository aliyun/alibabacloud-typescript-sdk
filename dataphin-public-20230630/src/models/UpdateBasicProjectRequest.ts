// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBasicProjectRequestUpdateCommandWhiteLists extends $dara.Model {
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

export class UpdateBasicProjectRequestUpdateCommand extends $dara.Model {
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
   * The ID of the offline compute source.
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
   * The display name of the project.
   * 
   * @example
   * MyProject.
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
   * The project name. This value cannot be modified. Pass in the current project name.
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
   * The ID of the real-time compute source.
   * 
   * @example
   * 2002
   */
  streamComputeSourceId?: number;
  /**
   * @remarks
   * The sandbox whitelist.
   */
  whiteLists?: UpdateBasicProjectRequestUpdateCommandWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      computeSourceId: 'ComputeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      name: 'Name',
      nameSpaceTag: 'NameSpaceTag',
      streamComputeSourceId: 'StreamComputeSourceId',
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      computeSourceId: 'number',
      description: 'string',
      displayName: 'string',
      id: 'number',
      name: 'string',
      nameSpaceTag: 'string',
      streamComputeSourceId: 'number',
      whiteLists: { 'type': 'array', 'itemType': UpdateBasicProjectRequestUpdateCommandWhiteLists },
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

export class UpdateBasicProjectRequest extends $dara.Model {
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
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateBasicProjectRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateBasicProjectRequestUpdateCommand,
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

