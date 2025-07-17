// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCmsInstancesResponseBodyDataProducts extends $dara.Model {
  /**
   * @example
   * -
   */
  descr?: string;
  /**
   * @example
   * 20210
   */
  id?: string;
  /**
   * @example
   * cloudserver
   */
  instance?: string;
  /**
   * @example
   * hologres
   */
  name?: string;
  /**
   * @example
   * face
   */
  prod?: string;
  /**
   * @example
   * arms
   */
  source?: string;
  /**
   * @example
   * true
   */
  state?: string;
  /**
   * @example
   * 1647852021000
   */
  time?: string;
  /**
   * @example
   * HOLOGRES
   */
  type?: string;
  /**
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
   * @example
   * true
   */
  enableTag?: boolean;
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
  data?: ListCmsInstancesResponseBodyData;
  /**
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

