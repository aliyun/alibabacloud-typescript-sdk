// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementServiceRequest extends $dara.Model {
  /**
   * @remarks
   * **The description for the recall management service.**
   * 
   * @example
   * this is a test recall
   */
  description?: string;
  /**
   * @remarks
   * **The instance ID.**
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * **The name of the recall management service.**
   * 
   * @example
   * hot_global_recall
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

