// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23bf94d9-****-4994-****-616a827aa777
   */
  appId?: string;
  /**
   * @remarks
   * The target number of application instances. The minimum value is 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  replicas?: number;
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

