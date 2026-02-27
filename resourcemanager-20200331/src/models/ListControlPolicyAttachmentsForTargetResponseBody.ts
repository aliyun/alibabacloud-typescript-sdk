// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment extends $dara.Model {
  attachDate?: string;
  description?: string;
  effectScope?: string;
  policyId?: string;
  policyName?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      description: 'Description',
      effectScope: 'EffectScope',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      description: 'string',
      effectScope: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments extends $dara.Model {
  controlPolicyAttachment?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment[];
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachment: 'ControlPolicyAttachment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachment: { 'type': 'array', 'itemType': ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachmentsControlPolicyAttachment },
    };
  }

  validate() {
    if(Array.isArray(this.controlPolicyAttachment)) {
      $dara.Model.validateArray(this.controlPolicyAttachment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListControlPolicyAttachmentsForTargetResponseBody extends $dara.Model {
  controlPolicyAttachments?: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C276B600-7B7A-49E8-938C-E16CFA955A82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlPolicyAttachments: 'ControlPolicyAttachments',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlPolicyAttachments: ListControlPolicyAttachmentsForTargetResponseBodyControlPolicyAttachments,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlPolicyAttachments && typeof (this.controlPolicyAttachments as any).validate === 'function') {
      (this.controlPolicyAttachments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

