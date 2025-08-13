// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnalysisColumnRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Custom columns
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"variableName\\":\\"requestId\\",\\"variableTitle\\":\\"RequestId\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"eventTime\\",\\"variableTitle\\":\\"事件时间\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"accountId\\",\\"variableTitle\\":\\"账号\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"deviceId\\",\\"variableTitle\\":\\"设备ID\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"eventCode\\",\\"variableTitle\\":\\"事件编码\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"ip\\",\\"variableTitle\\":\\"IP\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"score\\",\\"variableTitle\\":\\"分值\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"tags\\",\\"variableTitle\\":\\"标签\\",\\"variableType\\":\\"SYSTEM_BIND\\",\\"isDefault\\":true},{\\"variableName\\":\\"DEtest222\\",\\"variableTitle\\":\\"测试222\\",\\"variableType\\":\\"NATIVE\\",\\"isDefault\\":false}]
   */
  columns?: string;
  /**
   * @remarks
   * Region code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      columns: 'columns',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      columns: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

