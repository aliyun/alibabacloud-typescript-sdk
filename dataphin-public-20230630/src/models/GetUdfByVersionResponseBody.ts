// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUdfByVersionResponseBodyUdfInfo extends $dara.Model {
  /**
   * @example
   * 10
   */
  category?: number;
  /**
   * @example
   * com.lydaas.dataphin.UdfTest
   */
  className?: string;
  /**
   * @example
   * udf_to_lower(char x)
   */
  commandHelp?: string;
  /**
   * @example
   * HADOOP
   */
  computeEngineType?: string;
  /**
   * @example
   * 30012110
   */
  creator?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * /
   */
  directory?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-06-10 10:01:01
   */
  gmtModified?: string;
  /**
   * @example
   * 1030111021
   */
  id?: number;
  /**
   * @example
   * 30012110
   */
  lastModifier?: string;
  /**
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

export class GetUdfByVersionResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  success?: boolean;
  udfInfo?: GetUdfByVersionResponseBodyUdfInfo;
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
      udfInfo: GetUdfByVersionResponseBodyUdfInfo,
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

