// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTargetResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * The flag that is added to the server. This parameter can be empty.
   * 
   * @example
   * del
   */
  flag?: string;
  /**
   * @remarks
   * The UUID of the server or the ID of the server group.
   * 
   * @example
   * 5c5f0169-3527-40a2-b5ff-0bc1db8f****
   */
  target?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   **uuid**: a server
   * *   **groupId**: a server group
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the server.
   */
  targets?: DescribeTargetResponseBodyTargets[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targets: 'Targets',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': DescribeTargetResponseBodyTargets },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

