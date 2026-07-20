// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitApplyRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AR01
   */
  applyRequest?: string;
  /**
   * @example
   * [{\\"fileName\\":\\"5a4b4xxxxd0b6.png\\",\\"filePath\\":\\"xxx/1cxxx7d0202.png\\",\\"name\\":\\"5axxxc1d0b6.png\\"}]
   */
  commitmentLetter?: string;
  /**
   * @example
   * 已经整改，关掉相关网站。
   */
  description?: string;
  /**
   * @example
   * 43029423
   */
  eventIdListShrink?: string;
  /**
   * @example
   * [{\\"fileName\\":\\"5a4b4xxxxd0b6.png\\",\\"filePath\\":\\"xxx/1cxxx7d0202.png\\",\\"name\\":\\"5axxxc1d0b6.png\\"}]
   */
  qualificationProof?: string;
  /**
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

