// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteRouteStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Application. You can find the ID on the **Application Management** page in the Console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * A list of Job IDs.
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the Namespace. You can find the ID on the **Namespaces** page in the Console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the Region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobIdList)) {
      $dara.Model.validateArray(this.jobIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

