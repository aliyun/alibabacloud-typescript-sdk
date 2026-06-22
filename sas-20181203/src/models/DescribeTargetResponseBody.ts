// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTargetResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * The flag. This parameter can be empty.
   * 
   * @example
   * del
   */
  flag?: string;
  /**
   * @remarks
   * The target. The value is a machine UUID or a machine group ID.
   * 
   * @example
   * 5c5f0169-3527-40a2-b5ff-0bc1db8f****
   */
  target?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * 
   * - **uuid**: added by individual asset
   * - **groupId**: added by server group.
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
   * The request ID.
   * 
   * @example
   * 79CFF74D-E967-5407-8A78-EE03B925FDAA
   */
  requestId?: string;
  /**
   * @remarks
   * The machine settings for the vulnerability type.
   */
  targets?: DescribeTargetResponseBodyTargets[];
  /**
   * @remarks
   * The total number of machine configuration entries returned.
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

