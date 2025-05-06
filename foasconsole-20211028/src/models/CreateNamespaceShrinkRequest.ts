// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceShrinkRequest extends $dara.Model {
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
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * di-593440390152545
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      instanceId: 'string',
      namespace: 'string',
      region: 'string',
      resourceSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

