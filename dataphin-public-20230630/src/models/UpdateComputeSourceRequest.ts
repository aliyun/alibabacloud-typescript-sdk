// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeSourceRequestUpdateCommandConfigList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSourceRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configList?: UpdateComputeSourceRequestUpdateCommandConfigList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102311
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test1021
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MacCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': UpdateComputeSourceRequestUpdateCommandConfigList },
      description: 'string',
      id: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeSourceRequest extends $dara.Model {
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
  updateCommand?: UpdateComputeSourceRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateComputeSourceRequestUpdateCommand,
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

