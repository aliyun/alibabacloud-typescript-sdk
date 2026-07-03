// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogFieldsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log type to which the field belongs.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  activityName?: string;
  /**
   * @remarks
   * The Medusa code for the field description.
   * 
   * @example
   * sas.cloudsiem.prod.activity_name
   */
  fieldDesc?: string;
  /**
   * @remarks
   * The name of the rule field.
   * 
   * @example
   * activity_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * - varchar: string
   * 
   * - bigint: number
   * 
   * @example
   * varchar
   */
  fieldType?: string;
  /**
   * @remarks
   * The log source to which the field belongs.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      fieldDesc: 'FieldDesc',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
      logCode: 'LogCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      fieldDesc: 'string',
      fieldName: 'string',
      fieldType: 'string',
      logCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogFieldsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogFieldsResponseBodyData[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeLogFieldsResponseBodyData },
      message: 'string',
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

