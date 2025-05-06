// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * di-593439443804417
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

