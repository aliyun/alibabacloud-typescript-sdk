// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteRegistryModuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * {\\"region\\": \\"cn-hangzhou\\", \\"vpcId\\": \\"vpc-bp145sc90s26q0qbkfb6i\\", \\"functionName\\": \\"filemgr-cn-hangzhou-063fd4aead\\", \\"mountPointsServerAddr\\": \\"063fd4aead-dex50.cn-hangzhou.nas.aliyuncs.com\\"}
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

