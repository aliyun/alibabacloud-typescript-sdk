// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookInputOutputResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The execution method of the playbook is in JSONObject format.
   */
  exeConfig?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
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
   * The output parameter configuration. This parameter is unavailable and is always left empty.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The input parameter type of the playbook. Valid values:
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
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
   * The configurations.
   */
  config?: DescribePlaybookInputOutputResponseBodyConfig;
  /**
   * @remarks
   * The request ID.
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

