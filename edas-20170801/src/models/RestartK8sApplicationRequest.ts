// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to obtain this ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-********ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * The timeout period for the change process, in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

