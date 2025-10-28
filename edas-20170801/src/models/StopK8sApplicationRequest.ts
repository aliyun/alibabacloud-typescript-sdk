// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-d237-*******8de18d
   */
  appId?: string;
  /**
   * @remarks
   * The timeout period of the change process. Unit: seconds.
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

