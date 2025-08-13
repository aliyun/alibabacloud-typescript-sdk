// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendVariablesVelocityRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region Code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * This parameter is required.
   * 
   * @example
   * 6770764
   */
  taskId?: number;
  /**
   * @remarks
   * Variable IDs
   * 
   * @example
   * [\\"232\\",\\"233\\"]
   */
  variableIdsStr?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'regId',
      taskId: 'taskId',
      variableIdsStr: 'variableIdsStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      taskId: 'number',
      variableIdsStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

