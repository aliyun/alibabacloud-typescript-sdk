// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgPlatformQueryProjectsAndSchemaFromMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is generated only when the request parameter EngineName is set to EMR.
   * 
   * @example
   * c-12345
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the compute engine.
   * 
   * @example
   * emr_test_project
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgPlatformQueryProjectsAndSchemaFromMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DsgPlatformQueryProjectsAndSchemaFromMetaResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DsgPlatformQueryProjectsAndSchemaFromMetaResponseBodyData },
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

