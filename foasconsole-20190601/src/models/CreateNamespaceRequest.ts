// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequestCreateNamespaceRequestResourceSpec extends $dara.Model {
  /**
   * @example
   * 10
   */
  cpu?: number;
  /**
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

export class CreateNamespaceRequestCreateNamespaceRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223493C7-FCA9-13D4-B75B-AF8B32F4****
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
  resourceSpec?: CreateNamespaceRequestCreateNamespaceRequestResourceSpec;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpec: CreateNamespaceRequestCreateNamespaceRequestResourceSpec,
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

export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createNamespaceRequest?: CreateNamespaceRequestCreateNamespaceRequest;
  static names(): { [key: string]: string } {
    return {
      createNamespaceRequest: 'CreateNamespaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createNamespaceRequest: CreateNamespaceRequestCreateNamespaceRequest,
    };
  }

  validate() {
    if(this.createNamespaceRequest && typeof (this.createNamespaceRequest as any).validate === 'function') {
      (this.createNamespaceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

