// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataDesensPlanTemplateValue } from "./DataDesensPlanTemplateValue";


export class DsgQueryDefaultTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The sensitive field type.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The supported data masking methods and parameter descriptions.
   */
  desensPlanTemplate?: { [key: string]: DataDesensPlanTemplateValue[] };
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      desensPlanTemplate: 'DesensPlanTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      desensPlanTemplate: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataDesensPlanTemplateValue } },
    };
  }

  validate() {
    if(this.desensPlanTemplate) {
      $dara.Model.validateMap(this.desensPlanTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgQueryDefaultTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DsgQueryDefaultTemplatesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
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
      data: { 'type': 'array', 'itemType': DsgQueryDefaultTemplatesResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

