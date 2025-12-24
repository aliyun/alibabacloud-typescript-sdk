// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentPlaybookResponseBodyPlaybooks extends $dara.Model {
  /**
   * @remarks
   * The description of the predefined component.
   * 
   * @example
   * aegis_kill_process
   */
  description?: string;
  /**
   * @remarks
   * The name of the predefined component.
   * 
   * @example
   * AegisKillQuara
   */
  displayName?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @example
   * template-alert
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      inputParams: 'InputParams',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      inputParams: 'string',
      paramType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the predefined components.
   */
  playbooks?: DescribeComponentPlaybookResponseBodyPlaybooks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5F5D6C9-DF1A-5381-92B1-39676F777D20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbooks: 'Playbooks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbooks: { 'type': 'array', 'itemType': DescribeComponentPlaybookResponseBodyPlaybooks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playbooks)) {
      $dara.Model.validateArray(this.playbooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

