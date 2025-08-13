// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecommendTaskRequest extends $dara.Model {
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
   * Name
   * 
   * This parameter is required.
   * 
   * @example
   * 注册样本
   */
  name?: string;
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
   * Task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5467
   */
  sampleId?: number;
  /**
   * @remarks
   * Variables to be calculated, variables
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"1112\\",\\"1113\\"]
   */
  variablesStr?: string;
  /**
   * @remarks
   * Indicator effect
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"dxkkLw8fe18\\",\\"dxUxSCM26d7\\"]
   */
  velocitiesStr?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      name: 'name',
      regId: 'regId',
      sampleId: 'sampleId',
      variablesStr: 'variablesStr',
      velocitiesStr: 'velocitiesStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      name: 'string',
      regId: 'string',
      sampleId: 'number',
      variablesStr: 'string',
      velocitiesStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

