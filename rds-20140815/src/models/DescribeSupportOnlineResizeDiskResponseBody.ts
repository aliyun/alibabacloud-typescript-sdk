// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupportOnlineResizeDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned.
   * 
   * @example
   * NotExists.InstanceId
   */
  code?: string;
  /**
   * @remarks
   * The response result set.
   * 
   * @example
   * {"SupportOnlineResizeDisk":true,"DBInstanceName":"rm-uf6wjk5xxxxxxx"}
   */
  data?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
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

