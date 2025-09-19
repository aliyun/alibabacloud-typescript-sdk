// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWhiteListStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 124.89.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the application whitelist policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to query the ID.
   * 
   * @example
   * 8494
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the application whitelist policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The duration of intelligent learning. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  studyTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      studyTime: 'StudyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      strategyId: 'number',
      strategyName: 'string',
      studyTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

