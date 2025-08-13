// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustVariableRequest extends $dara.Model {
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
   * Condition value.
   * 
   * @example
   * {\\"currentId\\":1,\\"deepCount\\":0,\\"list\\":[{\\"currentId\\":2,\\"deepCount\\":1,\\"left\\":{\\"code\\":\\"__hit_rules\\",\\"fieldType\\":\\"STRING\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"hitRules\\",\\"operatorCode\\":\\"deNotInNameList\\"},\\"operatorCode\\":\\"deNotInNameList\\",\\"parentId\\":1,\\"right\\":{\\"code\\":\\"\\"nl_Xcufc8wV6624\\"\\",\\"name\\":\\"nl_Xcufc8wV6624\\",\\"rightVariableType\\":\\"variable\\"}},{\\"currentId\\":3,\\"deepCount\\":1,\\"list\\":[{\\"currentId\\":4,\\"deepCount\\":2,\\"left\\":{\\"code\\":\\"__v_safde\\",\\"fieldType\\":\\"DOUBLE\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":true,\\"name\\":\\"score\\",\\"operatorCode\\":\\"equals\\"},\\"operatorCode\\":\\"equals\\",\\"parentId\\":3,\\"right\\":{\\"code\\":\\"\\"99\\"\\",\\"name\\":\\"99\\",\\"rightVariableType\\":\\"constant\\"}},{\\"currentId\\":5,\\"deepCount\\":2,\\"left\\":{\\"code\\":\\"queryPhoneSimulatorInfo(deviceToken)?\\",\\"fieldType\\":\\"STRING\\",\\"functionName\\":\\"\\",\\"hasRightVariable\\":false,\\"name\\":\\"__device-test01__\\",\\"operatorCode\\":\\"isNotEmptyWrapper\\"},\\"operatorCode\\":\\"isNotEmptyWrapper\\",\\"parentId\\":3,\\"right\\":{\\"functionName\\":\\"\\",\\"name\\":\\"\\",\\"rightVariableType\\":\\"constant\\"}}],\\"parentId\\":1,\\"relationship\\":\\"and\\"}],\\"parentId\\":0,\\"relationship\\":\\"and\\"}
   */
  condition?: string;
  /**
   * @remarks
   * Data version.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  dataVersion?: number;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * account_abuse_pro,account_abuse
   */
  eventCodes?: string;
  /**
   * @remarks
   * Variable ID
   * 
   * This parameter is required.
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * Variable name
   * 
   * This parameter is required.
   * 
   * @example
   * dxkkLw8fe18
   */
  name?: string;
  /**
   * @remarks
   * Output
   * 
   * @example
   * STRING
   */
  outputs?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      condition: 'condition',
      dataVersion: 'dataVersion',
      description: 'description',
      eventCodes: 'eventCodes',
      id: 'id',
      name: 'name',
      outputs: 'outputs',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      condition: 'string',
      dataVersion: 'number',
      description: 'string',
      eventCodes: 'string',
      id: 'number',
      name: 'string',
      outputs: 'string',
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

