// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Job number.
   * 
   * >You can query the job number by using the [QueryTaskList](https://help.aliyun.com/document_detail/67709.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 7f217ae0-61f5-42e2-a1c3-42bad0124****
   */
  taskNo?: string;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskNo: 'TaskNo',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      taskNo: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

