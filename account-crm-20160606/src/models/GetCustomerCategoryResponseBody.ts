// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerCategoryResponseBodyDataBizCategorySubConfigsBizSubCategory extends $dara.Model {
  code?: string;
  isCheck?: boolean;
  mainBiz?: boolean;
  name?: string;
  other?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isCheck: 'IsCheck',
      mainBiz: 'MainBiz',
      name: 'Name',
      other: 'Other',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isCheck: 'boolean',
      mainBiz: 'boolean',
      name: 'string',
      other: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryResponseBodyDataBizCategorySubConfigs extends $dara.Model {
  bizSubCategory?: GetCustomerCategoryResponseBodyDataBizCategorySubConfigsBizSubCategory[];
  static names(): { [key: string]: string } {
    return {
      bizSubCategory: 'BizSubCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizSubCategory: { 'type': 'array', 'itemType': GetCustomerCategoryResponseBodyDataBizCategorySubConfigsBizSubCategory },
    };
  }

  validate() {
    if(Array.isArray(this.bizSubCategory)) {
      $dara.Model.validateArray(this.bizSubCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryResponseBodyDataBizCategory extends $dara.Model {
  code?: string;
  isCheck?: boolean;
  mainBiz?: boolean;
  name?: string;
  other?: string;
  subConfigs?: GetCustomerCategoryResponseBodyDataBizCategorySubConfigs;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isCheck: 'IsCheck',
      mainBiz: 'MainBiz',
      name: 'Name',
      other: 'Other',
      subConfigs: 'SubConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isCheck: 'boolean',
      mainBiz: 'boolean',
      name: 'string',
      other: 'string',
      subConfigs: GetCustomerCategoryResponseBodyDataBizCategorySubConfigs,
    };
  }

  validate() {
    if(this.subConfigs && typeof (this.subConfigs as any).validate === 'function') {
      (this.subConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryResponseBodyData extends $dara.Model {
  bizCategory?: GetCustomerCategoryResponseBodyDataBizCategory[];
  static names(): { [key: string]: string } {
    return {
      bizCategory: 'BizCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCategory: { 'type': 'array', 'itemType': GetCustomerCategoryResponseBodyDataBizCategory },
    };
  }

  validate() {
    if(Array.isArray(this.bizCategory)) {
      $dara.Model.validateArray(this.bizCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerCategoryResponseBody extends $dara.Model {
  code?: string;
  data?: GetCustomerCategoryResponseBodyData;
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
      data: GetCustomerCategoryResponseBodyData,
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

