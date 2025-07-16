// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiDimTableAllFieldsResponseBodyValue extends $dara.Model {
  /**
   * @example
   * stxxxx
   */
  id?: string;
  /**
   * @example
   * Sheet1
   */
  name?: string;
  /**
   * @example
   * xxx
   */
  property?: { [key: string]: any };
  /**
   * @example
   * xxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      property: 'Property',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      property: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.property) {
      $dara.Model.validateMap(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiDimTableAllFieldsResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  value?: GetMultiDimTableAllFieldsResponseBodyValue[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      value: 'value',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: { 'type': 'array', 'itemType': GetMultiDimTableAllFieldsResponseBodyValue },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

