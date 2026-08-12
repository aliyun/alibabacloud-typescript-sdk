// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitApplyRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request reason.
   * 
   * - **AR01**: Rectified. Request to unblock.
   * - **AR02**: No violation found after investigation.
   * - **AR03**: The instance or service has been shut down and cannot be operated. Request to unblock and then clear the violation information.
   * - **AR04**: Files deleted. Request to unblock.
   * - **AR05**: The instance has been released.
   * - **AR00**: Other. Provide a description.
   * 
   * This parameter is required.
   * 
   * @example
   * AR01
   */
  applyRequest?: string;
  /**
   * @remarks
   * The commitment letter.
   * 
   * @example
   * [{\\"fileName\\":\\"5a4b4xxxxd0b6.png\\",\\"filePath\\":\\"xxx/1cxxx7d0202.png\\",\\"name\\":\\"5axxxc1d0b6.png\\"}]
   */
  commitmentLetter?: string;
  /**
   * @remarks
   * The description of the situation.
   * 
   * @example
   * Rectification completed. Related websites have been shut down.
   */
  description?: string;
  /**
   * @remarks
   * The list of specified event IDs.
   * 
   * @example
   * 43029423
   */
  eventIdListShrink?: string;
  /**
   * @remarks
   * The qualification proof.
   * 
   * @example
   * [{\\"fileName\\":\\"5a4b4xxxxd0b6.png\\",\\"filePath\\":\\"xxx/1cxxx7d0202.png\\",\\"name\\":\\"5axxxc1d0b6.png\\"}]
   */
  qualificationProof?: string;
  /**
   * @remarks
   * Specifies whether manual review is required.
   * - **true**: Manual review is required.
   * - **false**: Manual review is not required.
   * 
   * > Default value: manual review is not required.
   * 
   * @example
   * false
   */
  trial?: boolean;
  static names(): { [key: string]: string } {
    return {
      applyRequest: 'ApplyRequest',
      commitmentLetter: 'CommitmentLetter',
      description: 'Description',
      eventIdListShrink: 'EventIdList',
      qualificationProof: 'QualificationProof',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyRequest: 'string',
      commitmentLetter: 'string',
      description: 'string',
      eventIdListShrink: 'string',
      qualificationProof: 'string',
      trial: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

