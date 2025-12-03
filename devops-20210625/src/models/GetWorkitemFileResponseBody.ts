// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemFileResponseBodyWorkitemFile extends $dara.Model {
  /**
   * @example
   * sddrdfdf123df
   */
  id?: string;
  /**
   * @example
   * ddc.pdf
   */
  name?: string;
  /**
   * @example
   * 10001
   */
  size?: number;
  /**
   * @example
   * pdf
   */
  suffix?: string;
  /**
   * @example
   * http://tmaestro-oss.oss-cn-hongkong.aliyuncs.com/thread_1682129288279.log
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      size: 'size',
      suffix: 'suffix',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      size: 'number',
      suffix: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemFileResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  workitemFile?: GetWorkitemFileResponseBodyWorkitemFile;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
      workitemFile: 'workitemFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
      workitemFile: GetWorkitemFileResponseBodyWorkitemFile,
    };
  }

  validate() {
    if(this.workitemFile && typeof (this.workitemFile as any).validate === 'function') {
      (this.workitemFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

