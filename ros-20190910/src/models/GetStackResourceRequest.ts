// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the resource properties. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of resource property N that you want to query.
   * 
   * >  Maximum value of N: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The logical ID of the resource defined in the template.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the resource. Valid values:
   * 
   * *   CREATE_COMPLETE
   * *   CREATE_FAILED
   * *   CREATE_IN_PROGRESS
   * *   UPDATE_IN_PROGRESS
   * *   UPDATE_FAILED
   * *   UPDATE_COMPLETE
   * *   DELETE_IN_PROGRESS
   * *   DELETE_FAILED
   * *   CHECK_IN_PROGRESS
   * *   CHECK_FAILED
   * *   CHECK_COMPLETE
   * *   IMPORT_IN_PROGRESS
   * *   IMPORT_FAILED
   * *   IMPORT_COMPLETE
   */
  resourceAttributes?: string[];
  /**
   * @remarks
   * The name of resource property N that you want to query.
   * 
   * @example
   * true
   */
  showResourceAttributes?: boolean;
  /**
   * @remarks
   * The ID of the region to which the stack belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      resourceAttributes: 'ResourceAttributes',
      showResourceAttributes: 'ShowResourceAttributes',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': 'string' },
      showResourceAttributes: 'boolean',
      stackId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceAttributes)) {
      $dara.Model.validateArray(this.resourceAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

