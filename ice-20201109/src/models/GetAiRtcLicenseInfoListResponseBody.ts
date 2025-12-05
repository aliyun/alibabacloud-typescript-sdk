// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiRtcLicenseInfoDTO } from "./AiRtcLicenseInfoDto";


export class GetAiRtcLicenseInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * httpStatusCode
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * An array of AiRtcLicenseInfoDTO objects, each representing a license batch.
   */
  licenseInfoList?: AiRtcLicenseInfoDTO[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B117AF5-2A16-412C-B127-FA6175ED1***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      licenseInfoList: 'LicenseInfoList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      licenseInfoList: { 'type': 'array', 'itemType': AiRtcLicenseInfoDTO },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseInfoList)) {
      $dara.Model.validateArray(this.licenseInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

