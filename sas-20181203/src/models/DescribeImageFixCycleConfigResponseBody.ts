// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFixCycleConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cycle of the scheduled fix. Unit: day.
   * 
   * @example
   * 7
   */
  imageFixCycle?: number;
  /**
   * @remarks
   * Indicates whether the scheduled fix of image risks is enabled.
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * on
   */
  imageFixSwitch?: string;
  /**
   * @remarks
   * The range of the scheduled fix. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: The type of the image risk. The value is fixed to repo.
   * *   **target**: The content of the image risk. The value is in the format of Namespace/Image repository.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"qa-dac/yyuan9\\",\\"cdp-uat/zentao\\",\\"cafdms-qa/xxl-job-admin\\",\\"cafdms-qa/utils/jdk\\",\\"cafmfbi/ui\\",\\"cdp-uat/tradingdesk-webapp\\"]}
   */
  imageFixTarget?: string;
  /**
   * @remarks
   * The time range during which the image was modified. Unit: day.
   * 
   * @example
   * 30
   */
  imageTimeRange?: number;
  static names(): { [key: string]: string } {
    return {
      imageFixCycle: 'ImageFixCycle',
      imageFixSwitch: 'ImageFixSwitch',
      imageFixTarget: 'ImageFixTarget',
      imageTimeRange: 'ImageTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageFixCycle: 'number',
      imageFixSwitch: 'string',
      imageFixTarget: 'string',
      imageTimeRange: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixCycleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeImageFixCycleConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeImageFixCycleConfigResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

