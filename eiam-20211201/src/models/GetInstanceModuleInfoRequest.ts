// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceModuleInfoRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 一级模块标识，必填
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:license:module:ud
   */
  moduleKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleKey: 'ModuleKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

