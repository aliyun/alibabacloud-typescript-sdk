// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourceConfigItemsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration item.
   * 
   * @example
   * MaxCompute Default Project
   */
  desc?: string;
  /**
   * @remarks
   * The enumerated values for the configuration item.
   */
  enums?: string[];
  /**
   * @remarks
   * The group to which the configuration item belongs.
   * 
   * @example
   * group.basic
   */
  group?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * mc.default.project
   */
  key?: string;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * MaxCompute Default Project
   */
  name?: string;
  /**
   * @remarks
   * The placeholder for the configuration value.
   * 
   * @example
   * project
   */
  placeHolder?: string;
  /**
   * @remarks
   * Indicates whether the configuration item is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The sub-items of the configuration item.
   */
  subItems?: { [key: string]: any };
  /**
   * @remarks
   * The file type. This parameter is valid only when `type` is `file`. For example, .keytab.
   * 
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @remarks
   * The data type of the configuration item.
   * 
   * @example
   * STRING
   */
  type?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
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
  /**
   * @remarks
   * A list of configuration items.
   */
  data?: ListMmsDataSourceConfigItemsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
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

