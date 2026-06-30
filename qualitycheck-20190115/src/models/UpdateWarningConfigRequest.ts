// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWarningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For details, see the detailed information below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ridList":[18130],"configName":"0310","channels":[{"type":1,"url":"https://sca.console.aliyun.com/#/warningConfig"}],"configId":29}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

