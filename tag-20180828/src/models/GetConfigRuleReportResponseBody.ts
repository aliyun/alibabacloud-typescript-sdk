// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the report was generated. This value is a UNIX timestamp.
   * 
   * @example
   * 1655089159000
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * crp-ao0786618088006c****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * >  This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](https://help.aliyun.com/document_detail/433313.html) operation to generate the report.
   * 
   * @example
   * 154950938137****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * >  This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](https://help.aliyun.com/document_detail/433313.html) operation to generate the report.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      reportId: 'ReportId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      reportId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic information of the resource non-compliance report that is last generated.
   */
  data?: GetConfigRuleReportResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A68BD5BC-5B12-5A9B-8AE9-77884886BE10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request is successful.
   * *   false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetConfigRuleReportResponseBodyData,
      httpStatusCode: 'number',
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

