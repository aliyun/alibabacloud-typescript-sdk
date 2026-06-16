// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The API region ID.
   * 
   * @example
   * cn-hangzhou
   */
  apiRegionId?: string;
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * SELF
   */
  apiType?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The primary key ID of the associated variable definition.
   * 
   * @example
   * 2438
   */
  defineId?: string;
  /**
   * @remarks
   * The variable definition IDs. You can specify multiple IDs separated by commas.
   * 
   * @example
   * 1546, 1547
   */
  defineIds?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 变量描述
   */
  description?: string;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_agbzfi5134
   */
  eventCode?: string;
  /**
   * @remarks
   * The exception value.
   * 
   * @example
   * SYS_ERROR
   */
  exceptionValue?: string;
  /**
   * @remarks
   * The primary key ID of the variable.
   * 
   * @example
   * 106875
   */
  id?: number;
  /**
   * @remarks
   * The output field path.
   * 
   * @example
   * BOOLEAN
   */
  outputField?: string;
  /**
   * @remarks
   * The output type.
   * 
   * @example
   * STRING
   */
  outputType?: string;
  /**
   * @remarks
   * The input parameter information for the binding.
   * 
   * @example
   * {"accountId":"accountId","mobile":""}
   */
  params?: string;
  /**
   * @remarks
   * The event parameter mapping 2.0. Either params or paramsList must be non-empty. This is a List JSON structure.
   * 
   * @example
   * [{"eventFieldName":"accountId","required":false}]
   */
  paramsList?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The variable source.
   * 
   * @example
   * SAF
   */
  sourceType?: string;
  /**
   * @remarks
   * The title.
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

