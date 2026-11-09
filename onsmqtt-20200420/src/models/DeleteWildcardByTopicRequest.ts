// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWildcardByTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The first-level topic.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  firstTopic?: string;
  /**
   * @remarks
   * The ID of the instance to which the group ID that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The wildcard subscriptions to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test/#
   */
  wildcards?: string;
  static names(): { [key: string]: string } {
    return {
      firstTopic: 'FirstTopic',
      instanceId: 'InstanceId',
      wildcards: 'Wildcards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTopic: 'string',
      instanceId: 'string',
      wildcards: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

