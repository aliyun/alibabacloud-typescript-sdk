// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormComponentDefinitionListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * FooterYida
   */
  componentName?: string;
  /**
   * @example
   * formContainer_kksjiuk
   */
  fieldId?: string;
  /**
   * @example
   * {"en_US":""}
   */
  label?: string;
  /**
   * @example
   * formContainer_kksjiuk
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      fieldId: 'FieldId',
      label: 'Label',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      fieldId: 'string',
      label: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFormComponentDefinitionListResponseBody extends $dara.Model {
  result?: GetFormComponentDefinitionListResponseBodyResult[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
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
      result: 'Result',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': GetFormComponentDefinitionListResponseBodyResult },
      requestId: 'string',
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

