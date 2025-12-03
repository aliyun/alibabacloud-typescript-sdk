// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineEmasArtifactUrlResponseBody extends $dara.Model {
  /**
   * @example
   * ”“
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * http://aliyun.com
   */
  fileUrl?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true 接口调用成功，false 接口调用失败
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      fileUrl: 'fileUrl',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

