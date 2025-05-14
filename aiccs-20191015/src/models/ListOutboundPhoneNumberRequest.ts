// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutboundPhoneNumberRequest extends $dara.Model {
  /**
   * @example
   * 123@****.com
   */
  accountName?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clientToken: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

