// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceShareResponseBodyResourceShare extends $dara.Model {
  /**
   * @remarks
   * Indicates whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false: Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The time when the resource share was created.
   * 
   * @example
   * 2020-12-03T08:02:22.413Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * @example
   * rs-qSkW1HBY****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The name of the resource share.
   * 
   * @example
   * new
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The owner of the resource share.
   * 
   * @example
   * 151266687691****
   */
  resourceShareOwner?: string;
  /**
   * @remarks
   * The status of the resource share. Valid values:
   * 
   * *   Active: The resource share is enabled.
   * *   Pending: The resource share is associated with one or more resource sharing invitations that are waiting for confirmation.
   * *   Deleting: The resource share is being deleted.
   * *   Deleted: The resource share is deleted.
   * 
   * >  The system deletes the records of resource shares in the Deleted state within 48 hours to 96 hours after you delete the resource shares.
   * 
   * @example
   * Active
   */
  resourceShareStatus?: string;
  /**
   * @remarks
   * The time when the resource share was updated.
   * 
   * @example
   * 2020-12-04T08:55:25.382Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      createTime: 'CreateTime',
      resourceShareId: 'ResourceShareId',
      resourceShareName: 'ResourceShareName',
      resourceShareOwner: 'ResourceShareOwner',
      resourceShareStatus: 'ResourceShareStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      createTime: 'string',
      resourceShareId: 'string',
      resourceShareName: 'string',
      resourceShareOwner: 'string',
      resourceShareStatus: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceShareResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2860A3A4-D8C1-4EF4-954E-84A3945E26E5
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the resource share.
   */
  resourceShare?: UpdateResourceShareResponseBodyResourceShare;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceShare: 'ResourceShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceShare: UpdateResourceShareResponseBodyResourceShare,
    };
  }

  validate() {
    if(this.resourceShare && typeof (this.resourceShare as any).validate === 'function') {
      (this.resourceShare as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

