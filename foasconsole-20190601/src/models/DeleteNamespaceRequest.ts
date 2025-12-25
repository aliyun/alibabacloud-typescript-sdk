// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceRequestDeleteNamespaceRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteNamespaceRequest?: DeleteNamespaceRequestDeleteNamespaceRequest;
  static names(): { [key: string]: string } {
    return {
      deleteNamespaceRequest: 'DeleteNamespaceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteNamespaceRequest: DeleteNamespaceRequestDeleteNamespaceRequest,
    };
  }

  validate() {
    if(this.deleteNamespaceRequest && typeof (this.deleteNamespaceRequest as any).validate === 'function') {
      (this.deleteNamespaceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

