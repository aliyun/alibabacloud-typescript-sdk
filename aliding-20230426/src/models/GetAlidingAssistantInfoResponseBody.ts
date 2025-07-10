// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlidingAssistantInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  approvalStatus?: number;
  /**
   * @example
   * 123
   */
  processInstanceId?: string;
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
      approvalStatus: 'approvalStatus',
      processInstanceId: 'processInstanceId',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'number',
      processInstanceId: 'string',
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

