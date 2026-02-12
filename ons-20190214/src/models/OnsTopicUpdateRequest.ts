// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTopicUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the topic belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The read/write mode that you want to configure for the topic. Valid values:
   * 
   * *   **6**: Both read and write operations are allowed.
   * *   **4**: Write operations are forbidden.
   * *   **2**: Read operations are forbidden.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  perm?: number;
  /**
   * @remarks
   * The name of the topic that you want to manage.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      perm: 'Perm',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      perm: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

