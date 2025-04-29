// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataTaskRunInfo extends $dara.Model {
  /**
   * @example
   * true
   */
  concurrentChargeEnable?: boolean;
  /**
   * @example
   * 1
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentChargeEnable: 'concurrentChargeEnable',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentChargeEnable: 'boolean',
      responseTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

