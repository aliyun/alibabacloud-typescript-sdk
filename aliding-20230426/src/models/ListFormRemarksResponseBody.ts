// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFormRemarksResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  formRemarkVoMap?: { [key: string]: any };
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
      formRemarkVoMap: 'formRemarkVoMap',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formRemarkVoMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.formRemarkVoMap) {
      $dara.Model.validateMap(this.formRemarkVoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

