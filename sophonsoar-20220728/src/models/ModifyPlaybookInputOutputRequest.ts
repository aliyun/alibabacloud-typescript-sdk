// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPlaybookInputOutputRequest extends $dara.Model {
  /**
   * @remarks
   * The execution method for the playbook. This parameter is in the JSONObject format.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The input parameter configuration for the playbook. This parameter is in the JSONArray format.
   * 
   * This parameter is required.
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
   * @remarks
   * The language of the request and response messages.
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Playbooks do not support output parameter configurations. This parameter is fixed to an empty value.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The type of the input parameter for the playbook.
   * 
   * - **template-ip**: IP request template.
   * 
   * - **template-file**: file request template.
   * 
   * - **template-process**: process request template.
   * 
   * - **custom**: custom parameter.
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8baa6cff-319e-4ede-97bc-xxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      lang: 'Lang',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
      inputParams: 'string',
      lang: 'string',
      outputParams: 'string',
      paramType: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

