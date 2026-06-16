// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllRootVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains the value.
   * 
   * @example
   * 61.169.104.202
   */
  sourceIp?: string;
  /**
   * @remarks
   * The list of device variables.
   * 
   * @example
   * [180]
   */
  deviceVariableIds?: string;
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_arqbuy7206
   */
  eventCode?: string;
  /**
   * @remarks
   * The list of custom variables.
   * 
   * @example
   * [6780]
   */
  expressionVariableIds?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 2557
   */
  id?: number;
  /**
   * @remarks
   * The list of event fields.
   * 
   * @example
   * [106780]
   */
  nativeVariableIds?: string;
  /**
   * @remarks
   * The custom query variables.
   * 
   * @example
   * [2678]
   */
  queryVariableIds?: string;
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
   * The custom cumulative variables.
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

