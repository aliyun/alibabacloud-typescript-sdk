// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-*******-ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * The number of instances on which you want to start the application.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The timeout period of the change process. Valid values: 1 to 1800. Default value: 600. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      replicas: 'Replicas',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      replicas: 'number',
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

