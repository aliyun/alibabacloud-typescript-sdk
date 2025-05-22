// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SignalResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The token can be up to 64 characters in length and can contain letters, digits, hyphens (-) and underscores (_).
   * 
   * For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The logical ID of the resource as defined in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The status of the signal. Failure signals can cause stack creation or update to fail. If all signals are warnings, the stack cannot be created or updated. Valid values:
   * 
   * *   SUCCESS
   * *   FAILURE
   * *   WARNING
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the signal. The ID must be 1 to 64 characters in length. If multiple signals are sent to a single resource, each signal must have a unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27c7347b-352a-4377-accf-63d361c1****
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      stackId: 'string',
      status: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

