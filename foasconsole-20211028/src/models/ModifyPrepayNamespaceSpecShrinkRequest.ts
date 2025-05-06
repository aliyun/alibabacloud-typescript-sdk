// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayNamespaceSpecShrinkRequest extends $dara.Model {
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
   * di-593440219799842
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
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      region: 'Region',
      resourceSpecShrink: 'ResourceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

