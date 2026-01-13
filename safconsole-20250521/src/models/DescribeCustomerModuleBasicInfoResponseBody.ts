// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeCustomerModuleBasicInfoResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Customer model name.
   * 
   * @example
   * ModuleName
   */
  customerModuleName?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * 备注。
   */
  description?: string;
  /**
   * @remarks
   * Model identifier.
   * 
   * @example
   * ModuleName
   */
  innerModuleName?: string;
  /**
   * @remarks
   * Module type.
   * 
   * @example
   * PMML
   */
  moduleType?: string;
  /**
   * @remarks
   * Test address.
   * 
   * @example
   * model.pmml
   */
  storePath?: string;
  static names(): { [key: string]: string } {
    return {
      customerModuleName: 'CustomerModuleName',
      description: 'Description',
      innerModuleName: 'InnerModuleName',
      moduleType: 'ModuleType',
      storePath: 'StorePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleName: 'string',
      description: 'string',
      innerModuleName: 'string',
      moduleType: 'string',
      storePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerModuleBasicInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * Request ID
   * 
   * @example
   * 055f1546-f465-4c92-a2da-bfb86abe6f56
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  resultObject?: DescribeCustomerModuleBasicInfoResponseBodyResultObject;
  /**
   * @remarks
   * Indicates whether the application configuration information was successfully retrieved. Possible values: true: Success; false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeCustomerModuleBasicInfoResponseBodyResultObject,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

