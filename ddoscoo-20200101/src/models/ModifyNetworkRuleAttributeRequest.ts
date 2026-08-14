// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNetworkRuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  forwardProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  frontendPort?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  module?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      forwardProtocol: 'ForwardProtocol',
      frontendPort: 'FrontendPort',
      instanceId: 'InstanceId',
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      forwardProtocol: 'string',
      frontendPort: 'number',
      instanceId: 'string',
      module: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

