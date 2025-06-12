// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseChatRequest extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chat-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * 9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=
   */
  token?: string;
  /**
   * @example
   * edbcf95a-ef9f-4296-a0a6-985ac9e36db3
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CUSTOMER
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      token: 'Token',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      token: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

