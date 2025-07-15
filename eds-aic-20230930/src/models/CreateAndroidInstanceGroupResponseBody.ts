// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-cuv4scs4obxch****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instances.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
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

export class CreateAndroidInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The instance groups.
   */
  instanceGroupInfos?: CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos[];
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 22365781890****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A923337-44D9-5CAD-9A53-95084BD4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupInfos: 'InstanceGroupInfos',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupInfos: { 'type': 'array', 'itemType': CreateAndroidInstanceGroupResponseBodyInstanceGroupInfos },
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    if(Array.isArray(this.instanceGroupInfos)) {
      $dara.Model.validateArray(this.instanceGroupInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

