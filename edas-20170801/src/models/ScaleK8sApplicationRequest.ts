// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 23bf94d9-****-4994-****-616a827aa777
   */
  appId?: string;
  /**
   * @remarks
   * The expected number of application instances after the scale-out or scale-in. The minimum number is 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  replicas?: number;
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

