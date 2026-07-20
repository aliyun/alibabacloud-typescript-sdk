// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitApplyRecordRequest extends $dara.Model {
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
  eventIdList?: string[];
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
      eventIdList: 'EventIdList',
      qualificationProof: 'QualificationProof',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyRequest: 'string',
      commitmentLetter: 'string',
      description: 'string',
      eventIdList: { 'type': 'array', 'itemType': 'string' },
      qualificationProof: 'string',
      trial: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.eventIdList)) {
      $dara.Model.validateArray(this.eventIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

