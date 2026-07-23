// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrafficControlTaskTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - `Daily`: The daily environment.
   * 
   * - `Pre`: The staging environment.
   * 
   * - `Prod`: The production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. For more information, see [ListInstances](https://help.aliyun.com/document_detail/2411819.html).
   * 
   * @example
   * pairec-test-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

