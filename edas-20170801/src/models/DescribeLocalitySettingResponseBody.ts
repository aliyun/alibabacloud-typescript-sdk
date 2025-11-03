// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalitySettingResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 15
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLocalitySettingResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: DescribeLocalitySettingResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1053-08e4-47a5-b2ab-5c0323de****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeLocalitySettingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

