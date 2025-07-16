// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFieldDefByUuidResponseBodyResult extends $dara.Model {
  /**
   * @example
   * NORMAL
   */
  behavior?: string;
  children?: string;
  /**
   * @example
   * TextareaField
   */
  componentName?: string;
  /**
   * @example
   * textField_laq7xxx
   */
  fieldId?: string;
  /**
   * @example
   * {}
   */
  label?: any;
  /**
   * @example
   * {}
   */
  props?: any;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      behavior: 'Behavior',
      children: 'Children',
      componentName: 'ComponentName',
      fieldId: 'FieldId',
      label: 'Label',
      props: 'Props',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: 'string',
      children: 'string',
      componentName: 'string',
      fieldId: 'string',
      label: 'any',
      props: 'any',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFieldDefByUuidResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: GetFieldDefByUuidResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
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
      result: 'result',
      success: 'success',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetFieldDefByUuidResponseBodyResult },
      success: 'boolean',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

