// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUpgradeReleaseVersionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://help.aliyun.com/zh/hologres/product-overview/release-notes
   */
  releaseNotesUrl?: string;
  /**
   * @example
   * Stable
   */
  type?: string;
  upgradeStrategy?: string[];
  /**
   * @example
   * r2.2.47
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      releaseNotesUrl: 'ReleaseNotesUrl',
      type: 'Type',
      upgradeStrategy: 'UpgradeStrategy',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseNotesUrl: 'string',
      type: 'string',
      upgradeStrategy: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.upgradeStrategy)) {
      $dara.Model.validateArray(this.upgradeStrategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUpgradeReleaseVersionsResponseBody extends $dara.Model {
  data?: ListUpgradeReleaseVersionsResponseBodyData[];
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F6DFB9EA-0E2A-52AC-BFD5-1ADBBFFB6A2B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListUpgradeReleaseVersionsResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

