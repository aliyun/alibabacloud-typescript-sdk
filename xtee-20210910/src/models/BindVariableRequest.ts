// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVariableRequest extends $dara.Model {
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
   * API region ID
   * 
   * @example
   * cn-hangzhou
   */
  apiRegionId?: string;
  /**
   * @remarks
   * API type
   * 
   * @example
   * SELF
   */
  apiType?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Associated variable definition primary key ID
   * 
   * @example
   * 2438
   */
  defineId?: string;
  /**
   * @remarks
   * Variable definition IDs, can be multiple. If binding multiple IDs, separate them with commas
   * 
   * @example
   * 1546, 1547
   */
  defineIds?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * Event code
   * 
   * This parameter is required.
   * 
   * @example
   * de_agbzfi5134
   */
  eventCode?: string;
  /**
   * @remarks
   * Exception value
   * 
   * @example
   * SYS_ERROR
   */
  exceptionValue?: string;
  /**
   * @remarks
   * Variable primary key ID
   * 
   * @example
   * 106875
   */
  id?: number;
  /**
   * @remarks
   * Output field path
   * 
   * @example
   * BOOLEAN
   */
  outputField?: string;
  /**
   * @remarks
   * Output type
   * 
   * @example
   * STRING
   */
  outputType?: string;
  /**
   * @remarks
   * Binding input parameter information
   * 
   * @example
   * {"accountId":"accountId","mobile":""}
   */
  params?: string;
  /**
   * @remarks
   * Event parameter mapping 2.0, either params or paramsList must not be empty. List, JSON structure
   * 
   * @example
   * [{"eventFieldName":"accountId","required":false}]
   */
  paramsList?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Variable source
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * Title
   * 
   * This parameter is required.
   * 
   * @example
   * 变量title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      apiRegionId: 'apiRegionId',
      apiType: 'apiType',
      createType: 'createType',
      defineId: 'defineId',
      defineIds: 'defineIds',
      description: 'description',
      eventCode: 'eventCode',
      exceptionValue: 'exceptionValue',
      id: 'id',
      outputField: 'outputField',
      outputType: 'outputType',
      params: 'params',
      paramsList: 'paramsList',
      regId: 'regId',
      sourceType: 'sourceType',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      apiRegionId: 'string',
      apiType: 'string',
      createType: 'string',
      defineId: 'string',
      defineIds: 'string',
      description: 'string',
      eventCode: 'string',
      exceptionValue: 'string',
      id: 'number',
      outputField: 'string',
      outputType: 'string',
      params: 'string',
      paramsList: 'string',
      regId: 'string',
      sourceType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

