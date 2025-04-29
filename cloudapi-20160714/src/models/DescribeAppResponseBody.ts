// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 110843374
   */
  appId?: number;
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * CreateApptest
   */
  appName?: string;
  /**
   * @remarks
   * The time when the app was created.
   * 
   * @example
   * 2019-01-29T09:33:01Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the app.
   * 
   * @example
   * Estimated on October 15, 2021 at 10:20:27
   */
  description?: string;
  /**
   * @remarks
   * 扩展信息
   * 
   * @example
   * 110243810311
   */
  extend?: string;
  /**
   * @remarks
   * The time when the app was modified.
   * 
   * @example
   * 2019-01-29T09:33:01Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBDB3B0F-EC61-5F33-88AD-EC2446FA1DDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      extend: 'Extend',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      extend: 'string',
      modifiedTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

