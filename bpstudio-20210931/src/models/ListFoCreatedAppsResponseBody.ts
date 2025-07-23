// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFoCreatedAppsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * JIX9NEZUALGS46UI
   */
  applicationId?: string;
  /**
   * @remarks
   * The URL of the error report.
   * 
   * @example
   * https://api.aliyun.com/troubleshoot?q=ServiceUnavailable&product=BPStudio&requestId=4CDA03A3-C652-1408-8ABD-7E652A7CBFB6
   */
  reportUrl?: string;
  /**
   * @remarks
   * The state of the application.
   * 
   * @example
   * Deployed_Success
   * Destroyed_Success
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 容灾计划1
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      reportUrl: 'ReportUrl',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      reportUrl: 'string',
      status: 'string',
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

export class ListFoCreatedAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The templates.
   */
  data?: ListFoCreatedAppsResponseBodyData[];
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Cannot find region according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40F63F07-3AB6-53B3-8825-0580C130E3EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFoCreatedAppsResponseBodyData },
      message: 'string',
      requestId: 'string',
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

