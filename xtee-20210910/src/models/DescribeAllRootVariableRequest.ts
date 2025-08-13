// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllRootVariableRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Request source IP. No need to fill in, the system will automatically obtain it.
   * 
   * @example
   * 61.169.104.202
   */
  sourceIp?: string;
  /**
   * @remarks
   * Device variable list
   * 
   * @example
   * [180]
   */
  deviceVariableIds?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * Custom variable list
   * 
   * @example
   * [6780]
   */
  expressionVariableIds?: string;
  /**
   * @remarks
   * Variable ID.
   * 
   * @example
   * 2557
   */
  id?: number;
  /**
   * @remarks
   * Event field list
   * 
   * @example
   * [106780]
   */
  nativeVariableIds?: string;
  /**
   * @remarks
   * Custom query variable
   * 
   * @example
   * [2678]
   */
  queryVariableIds?: string;
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
   * Custom cumulative variable
   * 
   * @example
   * [780]
   */
  velocityVariableIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      deviceVariableIds: 'deviceVariableIds',
      eventCode: 'eventCode',
      expressionVariableIds: 'expressionVariableIds',
      id: 'id',
      nativeVariableIds: 'nativeVariableIds',
      queryVariableIds: 'queryVariableIds',
      regId: 'regId',
      velocityVariableIds: 'velocityVariableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      deviceVariableIds: 'string',
      eventCode: 'string',
      expressionVariableIds: 'string',
      id: 'number',
      nativeVariableIds: 'string',
      queryVariableIds: 'string',
      regId: 'string',
      velocityVariableIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

