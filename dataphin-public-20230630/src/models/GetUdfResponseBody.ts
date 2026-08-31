// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUdfResponseBodyUdfInfo extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * - 1: window function.
   * - 2: statistical function.
   * - 3: numerical function.
   * - 4: string function.
   * - 5: time function.
   * - 6: IP address helper function.
   * - 7: URL-related function.
   * - 8: encoding and decoding function.
   * - 9: business-related function.
   * - 10: other.
   * 
   * @example
   * 10
   */
  category?: number;
  /**
   * @remarks
   * The registered class name.
   * 
   * @example
   * com.lydaas.dataphin.UdfTest
   */
  className?: string;
  /**
   * @remarks
   * The command help information.
   * 
   * @example
   * udf_to_lower(char x)
   */
  commandHelp?: string;
  /**
   * @remarks
   * The compute engine type. Valid values: HADOOP, MAX_COMPUTE, and FLINK.
   * 
   * @example
   * HADOOP
   */
  computeEngineType?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012110
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The storage folder.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The creation time. Format: yyyy-MM-d HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time. Format: yyyy-MM-d HH:mm:ss.
   * 
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user-defined function ID.
   * 
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * 30012110
   */
  lastModifier?: string;
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * udf_to_lower
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      className: 'ClassName',
      commandHelp: 'CommandHelp',
      computeEngineType: 'ComputeEngineType',
      creator: 'Creator',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      className: 'string',
      commandHelp: 'string',
      computeEngineType: 'string',
      creator: 'string',
      description: 'string',
      directory: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUdfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the user-defined function.
   */
  udfInfo?: GetUdfResponseBodyUdfInfo;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      udfInfo: 'UdfInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      udfInfo: GetUdfResponseBodyUdfInfo,
    };
  }

  validate() {
    if(this.udfInfo && typeof (this.udfInfo as any).validate === 'function') {
      (this.udfInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

