// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetailByOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  acceptor?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  channel?: string;
  checkAuthItems?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  empId?: string;
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  optSource?: string;
  static names(): { [key: string]: string } {
    return {
      acceptor: 'Acceptor',
      bizNo: 'BizNo',
      channel: 'Channel',
      checkAuthItems: 'CheckAuthItems',
      empId: 'EmpId',
      language: 'Language',
      optSource: 'OptSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptor: 'string',
      bizNo: 'string',
      channel: 'string',
      checkAuthItems: 'string',
      empId: 'string',
      language: 'string',
      optSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

