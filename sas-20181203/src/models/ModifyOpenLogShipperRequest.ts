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
   * > If you use Server Guard, set this parameter to **aegis**. If you use Security Center, set this parameter to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the member accounts (Alibaba Cloud account) in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
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

