// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCmsInstancesResponseBodyDataProducts extends $dara.Model {
  /**
   * @remarks
   * The product description.
   * 
   * @example
   * -
   */
  descr?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20210
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * cloudserver
   */
  instance?: string;
  /**
   * @remarks
   * The name of the integrated cloud product.
   * 
   * @example
   * hologres
   */
  name?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * face
   */
  prod?: string;
  /**
   * @remarks
   * The event source.
   * 
   * @example
   * arms
   */
  source?: string;
  /**
   * @remarks
   * The integration status of the product.
   * 
   * - `true`: Integrated.
   * 
   * - `false`: Not integrated.
   * 
   * @example
   * true
   */
  state?: string;
  /**
   * @remarks
   * The creation timestamp of the Grafana dashboard.
   * 
   * @example
   * 1647852021000
   */
  time?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * HOLOGRES
   */
  type?: string;
  /**
   * @remarks
   * The complete URL of the Grafana dashboard.
   * 
   * @example
   * https://g.console.aliyun.com/d/1098370038733503-35894-565/cms-hologres?orgId\\u003d9\\u0026refresh\\u003d60s
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      descr: 'Descr',
      id: 'Id',
      instance: 'Instance',
      name: 'Name',
      prod: 'Prod',
      source: 'Source',
      state: 'State',
      time: 'Time',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descr: 'string',
      id: 'string',
      instance: 'string',
      name: 'string',
      prod: 'string',
      source: 'string',
      state: 'string',
      time: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether tag collection for the cloud product is enabled.
   * 
   * @example
   * true
   */
  enableTag?: boolean;
  /**
   * @remarks
   * The list of cloud products.
   */
  products?: ListCmsInstancesResponseBodyDataProducts[];
  static names(): { [key: string]: string } {
    return {
      enableTag: 'EnableTag',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTag: 'boolean',
      products: { 'type': 'array', 'itemType': ListCmsInstancesResponseBodyDataProducts },
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCmsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCmsInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7A04B0D-E2CA-59BB-8A9D-D5D349C22BF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCmsInstancesResponseBodyData,
      requestId: 'string',
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

