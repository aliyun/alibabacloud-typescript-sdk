// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetailByIdResponseBodyDataVulDetails extends $dara.Model {
  /**
   * @remarks
   * CVE ID.
   * 
   * @example
   * CVE-2022-21291
   */
  cveId?: string;
  /**
   * @remarks
   * The CVSS score of the vulnerability in the Alibaba Cloud vulnerability database.
   * 
   * @example
   * 10.0
   */
  cvssScore?: string;
  /**
   * @remarks
   * Fix suggestion.
   * 
   * @example
   * https://avd.aliyun.com/detail/CVE-2022-21291
   */
  fixSuggestion?: string;
  /**
   * @remarks
   * Title of the vulnerability announcement.
   * 
   * @example
   * Chanjet T-Plus SetupAccount/Upload. Aspx file upload vulnerability(CNVD-2022-60632)
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      cvssScore: 'CvssScore',
      fixSuggestion: 'FixSuggestion',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvssScore: 'string',
      fixSuggestion: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Vulnerability details.
   */
  vulDetails?: GetDetailByIdResponseBodyDataVulDetails[];
  static names(): { [key: string]: string } {
    return {
      vulDetails: 'VulDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulDetails: { 'type': 'array', 'itemType': GetDetailByIdResponseBodyDataVulDetails },
    };
  }

  validate() {
    if(Array.isArray(this.vulDetails)) {
      $dara.Model.validateArray(this.vulDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDetailByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 404
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDetailByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * DAB46EC5-3746-59C4-B6D2-469F442EC73F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Values: - **true**: indicates a successful call. - **false**: indicates a failed call.
   * 
   * @example
   * true
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
      code: 'string',
      data: GetDetailByIdResponseBodyData,
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

