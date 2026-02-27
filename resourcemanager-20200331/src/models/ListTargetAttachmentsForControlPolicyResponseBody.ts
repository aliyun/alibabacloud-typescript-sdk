// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment extends $dara.Model {
  attachDate?: string;
  targetId?: string;
  targetName?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      targetId: 'string',
      targetName: 'string',
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

export class ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments extends $dara.Model {
  targetAttachment?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment[];
  static names(): { [key: string]: string } {
    return {
      targetAttachment: 'TargetAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAttachment: { 'type': 'array', 'itemType': ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachmentsTargetAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.targetAttachment)) {
      $dara.Model.validateArray(this.targetAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetAttachmentsForControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B32BD3D6-1089-41F3-8E70-E0079BC7D760
   */
  requestId?: string;
  targetAttachments?: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments;
  /**
   * @remarks
   * The total number of objects to which the control policy is attached.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      targetAttachments: 'TargetAttachments',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      targetAttachments: ListTargetAttachmentsForControlPolicyResponseBodyTargetAttachments,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.targetAttachments && typeof (this.targetAttachments as any).validate === 'function') {
      (this.targetAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

