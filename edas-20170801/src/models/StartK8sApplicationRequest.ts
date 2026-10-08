// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to obtain the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-*******-ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * The number of application instances to start.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The timeout period for the change process, in seconds. Valid values: 1 to 1800. Default value: 600.
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

