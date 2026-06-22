// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOpenLogShipperRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the request source. Default value: **aegis**. Valid values:
   * 
   * - **aegis**: Server Guard edition.
   * - **sas**: Security Center edition.
   * 
   * > Server Guard users must use **aegis**, and Security Center users must use **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory (Alibaba Cloud account).
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

