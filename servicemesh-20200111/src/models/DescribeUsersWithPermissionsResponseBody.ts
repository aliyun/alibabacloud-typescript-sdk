// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersWithPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12B94024-C241-13CD-BA44-6106DF1****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of the IDs of the RAM users or RAM roles to which an RBAC role is assigned.
   */
  UIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      UIDs: 'UIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      UIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.UIDs)) {
      $dara.Model.validateArray(this.UIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

