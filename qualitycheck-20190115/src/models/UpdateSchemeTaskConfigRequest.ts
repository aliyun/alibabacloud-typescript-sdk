// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Input parameter JSON. For details, see the request parameters section.
   * 
   * @example
   * {"schemeTaskConfigId":368,"status":1,"name":"检测任务 2022-09-21 16:59:50"}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
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

