// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleKeyDeletionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The scheduled period after which the CMK is deleted. During this period, the CMK is in the PendingDeletion state. After this period ends, you cannot cancel the key deletion task.
   * 
   * Valid values: 7 to 366.
   * 
   * Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  pendingWindowInDays?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pendingWindowInDays: 'PendingWindowInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pendingWindowInDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

