// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourceConfigItemsResponseBodyData extends $dara.Model {
  /**
   * @example
   * MaxCompute Default Project
   */
  desc?: string;
  enums?: string[];
  /**
   * @example
   * group.basic
   */
  group?: string;
  /**
   * @example
   * mc.default.project
   */
  key?: string;
  /**
   * @example
   * MaxCompute Default Project
   */
  name?: string;
  /**
   * @example
   * project
   */
  placeHolder?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  subItems?: { [key: string]: any };
  /**
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @example
   * STRING
   */
  type?: string;
  /**
   * @example
   * p1=1/p2=abc
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subItems: 'subItems',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subItems: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    if(this.subItems) {
      $dara.Model.validateMap(this.subItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourceConfigItemsResponseBody extends $dara.Model {
  data?: ListMmsDataSourceConfigItemsResponseBodyData[];
  /**
   * @example
   * 688003E1-D1B4-5468-957E-2FFB3AC8D79B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMmsDataSourceConfigItemsResponseBodyData },
      requestId: 'string',
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

