// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud phone instance IDs. You can query the execution results of up to 50 instances in a single request.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The command execution ID. You can use this ID and the cloud phone instance ID to query the result of a command execution.
   * 
   * This parameter is required.
   * 
   * @example
   * t-4e98eeb5****
   */
  invocationId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      invocationId: 'InvocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      invocationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

