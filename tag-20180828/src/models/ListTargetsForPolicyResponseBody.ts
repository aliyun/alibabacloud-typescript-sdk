// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetsForPolicyResponseBodyTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 195320939469****
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the object. Valid values:
   * 
   * *   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
   * *   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: number;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsForPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the object belongs to the resource directory. Valid values:
   * 
   * *   true: The object belongs to the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
   * *   false: The object does not belong to the resource directory. This value is available if you use the Tag Policy feature in single-account mode.
   * 
   * @example
   * true
   */
  isRd?: boolean;
  /**
   * @remarks
   * Indicates whether the next query is required.
   * 
   * *   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
   * *   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * >  This parameter is returned only if you use the Tag Policy feature in multi-account mode.
   * 
   * @example
   * rd-3G****
   */
  rdId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EE71C8D-6DB8-56AC-8B05-3D4C0116E6A1
   */
  requestId?: string;
  /**
   * @remarks
   * The objects to which the tag policy is attached.
   */
  targets?: ListTargetsForPolicyResponseBodyTargets[];
  static names(): { [key: string]: string } {
    return {
      isRd: 'IsRd',
      nextToken: 'NextToken',
      rdId: 'RdId',
      requestId: 'RequestId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isRd: 'boolean',
      nextToken: 'string',
      rdId: 'string',
      requestId: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsForPolicyResponseBodyTargets },
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

