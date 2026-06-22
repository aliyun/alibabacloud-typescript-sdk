// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFixCycleConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The scheduled fix cycle. Unit: days.
   * 
   * @example
   * 7
   */
  imageFixCycle?: number;
  /**
   * @remarks
   * The scheduled image fix switch. Valid values:
   * 
   * - **on**: Enabled.
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  imageFixSwitch?: string;
  /**
   * @remarks
   * The scope of the scheduled image fix. This parameter is in JSON format and contains the following fields:
   * 
   * - **type**: The target type. The value is fixed as repo.
   * - **target**: The target content. Format: namespace/image repository.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"qa-dac/yyuan9\\",\\"cdp-uat/zentao\\",\\"cafdms-qa/xxl-job-admin\\",\\"cafdms-qa/utils/jdk\\",\\"cafmfbi/ui\\",\\"cdp-uat/tradingdesk-webapp\\"]}
   */
  imageFixTarget?: string;
  /**
   * @remarks
   * The time range during which the image was modified. Unit: days.
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
   * The response data.
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

