// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerCategoryDictionaryResponseBodyDataEnumConfig extends $dara.Model {
  enumName?: string;
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      enumName: 'enumName',
      enumValue: 'enumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumName: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryDictionaryResponseBodyData extends $dara.Model {
  enumConfig?: GetCustomerCategoryDictionaryResponseBodyDataEnumConfig[];
  static names(): { [key: string]: string } {
    return {
      enumConfig: 'EnumConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enumConfig: { 'type': 'array', 'itemType': GetCustomerCategoryDictionaryResponseBodyDataEnumConfig },
    };
  }

  validate() {
    if(Array.isArray(this.enumConfig)) {
      $dara.Model.validateArray(this.enumConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryDictionaryResponseBody extends $dara.Model {
  code?: string;
  data?: GetCustomerCategoryDictionaryResponseBodyData;
  message?: string;
  requestId?: string;
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
      code: 'string',
      data: GetCustomerCategoryDictionaryResponseBodyData,
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

