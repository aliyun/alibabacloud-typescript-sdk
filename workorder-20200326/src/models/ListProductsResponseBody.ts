// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyDataConsultationMore extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @example
   * account
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataHotConsultation extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @example
   * agent
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataHotTech extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataTechMoreProductList extends $dara.Model {
  description?: string;
  name?: string;
  /**
   * @example
   * oss
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyDataTechMore extends $dara.Model {
  groupName?: string;
  productList?: ListProductsResponseBodyDataTechMoreProductList[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      productList: 'ProductList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      productList: { 'type': 'array', 'itemType': ListProductsResponseBodyDataTechMoreProductList },
    };
  }

  validate() {
    if(Array.isArray(this.productList)) {
      $dara.Model.validateArray(this.productList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyData extends $dara.Model {
  consultationMore?: ListProductsResponseBodyDataConsultationMore[];
  hotConsultation?: ListProductsResponseBodyDataHotConsultation[];
  hotTech?: ListProductsResponseBodyDataHotTech[];
  techMore?: ListProductsResponseBodyDataTechMore[];
  static names(): { [key: string]: string } {
    return {
      consultationMore: 'ConsultationMore',
      hotConsultation: 'HotConsultation',
      hotTech: 'HotTech',
      techMore: 'TechMore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consultationMore: { 'type': 'array', 'itemType': ListProductsResponseBodyDataConsultationMore },
      hotConsultation: { 'type': 'array', 'itemType': ListProductsResponseBodyDataHotConsultation },
      hotTech: { 'type': 'array', 'itemType': ListProductsResponseBodyDataHotTech },
      techMore: { 'type': 'array', 'itemType': ListProductsResponseBodyDataTechMore },
    };
  }

  validate() {
    if(Array.isArray(this.consultationMore)) {
      $dara.Model.validateArray(this.consultationMore);
    }
    if(Array.isArray(this.hotConsultation)) {
      $dara.Model.validateArray(this.hotConsultation);
    }
    if(Array.isArray(this.hotTech)) {
      $dara.Model.validateArray(this.hotTech);
    }
    if(Array.isArray(this.techMore)) {
      $dara.Model.validateArray(this.techMore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListProductsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * CA6204AC-6AA9-4CFA-9310-7DFD20C19EBC
   */
  requestId?: string;
  /**
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
      data: ListProductsResponseBodyData,
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

