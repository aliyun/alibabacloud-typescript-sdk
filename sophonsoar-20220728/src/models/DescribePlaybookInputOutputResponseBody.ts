// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookInputOutputResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The execution method of the playbook. The value is in the JSONObject format.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The input parameter configurations of the playbook. The value is in the JSONArray format.
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
   * Playbooks do not support output parameter configurations. This parameter is empty.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The type of the input parameters for the playbook.
   * 
   * - **template-ip**: IP request template.
   * 
   * - **template-file**: file request template.
   * 
   * - **template-process**: process request template.
   * 
   * - **custom**: custom parameters.
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      exeConfig: 'ExeConfig',
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      paramType: 'ParamType',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exeConfig: 'string',
      inputParams: 'string',
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

export class DescribePlaybookInputOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   */
  config?: DescribePlaybookInputOutputResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 688B4CCD-5272-5DCF-9D76-FE5EFEF545F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribePlaybookInputOutputResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

