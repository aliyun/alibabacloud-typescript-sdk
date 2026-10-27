// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitScriptPreReviewResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script review record.
   * 
   * This parameter is required.
   * 
   * @example
   * b8e1a4d3-9c2f-4e6a-b7d5-3f1e2a4c6b8d
   */
  recordId?: string;
  /**
   * @remarks
   * The reason for pre-review rejection. This parameter is required when ReviewResult is set to REJECT.
   * 
   * @example
   * The script content involves sensitive information
   */
  rejectReason?: string;
  /**
   * @remarks
   * The pre-review result. Valid values: PASS (approved) and REJECT (rejected). The value is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * PASS
   */
  reviewResult?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      recordId: 'RecordId',
      rejectReason: 'RejectReason',
      reviewResult: 'ReviewResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      recordId: 'string',
      rejectReason: 'string',
      reviewResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

