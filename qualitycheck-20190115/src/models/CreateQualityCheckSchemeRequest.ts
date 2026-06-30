// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQualityCheckSchemeRequest extends $dara.Model {
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
   * JSON request body. For details, see the parameter description in the request parameters section.
   * 
   * This parameter is required.
   * 
   * @example
   * {"dataType":1,"name":"质检方案A","type":1}
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

