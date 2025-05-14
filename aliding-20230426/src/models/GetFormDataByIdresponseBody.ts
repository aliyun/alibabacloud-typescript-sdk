// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFormDataByIDResponseBodyOriginator } from "./GetFormDataByIdresponseBodyOriginator";


export class GetFormDataByIDResponseBody extends $dara.Model {
  formData?: { [key: string]: any };
  /**
   * @example
   * FORM_INST_12345
   */
  formInstId?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedTimeGMT?: string;
  originator?: GetFormDataByIDResponseBodyOriginator;
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
      formData: 'formData',
      formInstId: 'formInstId',
      modifiedTimeGMT: 'modifiedTimeGMT',
      originator: 'originator',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formInstId: 'string',
      modifiedTimeGMT: 'string',
      originator: GetFormDataByIDResponseBodyOriginator,
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.formData) {
      $dara.Model.validateMap(this.formData);
    }
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

