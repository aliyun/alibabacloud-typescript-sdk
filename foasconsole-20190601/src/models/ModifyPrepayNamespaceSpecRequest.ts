// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverlesspost_public_cn-0ju2bj2****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns-1
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpec?: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequestResourceSpec,
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPrepayNamespaceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  modifyPrepayNamespaceSpecRequest?: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest;
  static names(): { [key: string]: string } {
    return {
      modifyPrepayNamespaceSpecRequest: 'ModifyPrepayNamespaceSpecRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyPrepayNamespaceSpecRequest: ModifyPrepayNamespaceSpecRequestModifyPrepayNamespaceSpecRequest,
    };
  }

  validate() {
    if(this.modifyPrepayNamespaceSpecRequest && typeof (this.modifyPrepayNamespaceSpecRequest as any).validate === 'function') {
      (this.modifyPrepayNamespaceSpecRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

