// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetadataRequest extends $dara.Model {
  evaluationDomain?: string;
  /**
   * @remarks
   * The language type. Governance evaluation definitions are returned in this language. Valid values:
   * 
   * - en: English.
   * - zh: Chinese.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The specialized evaluation code. Valid values:
   * 
   * - basic (default): foundation model (governance maturity) evaluation.
   * - ack: container building specialized evaluation.
   * - ai: machine learning specialized evaluation.
   * - nis: network service specialized evaluation.
   * 
   * @example
   * ack
   */
  lensCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The governance topic code.
   * 
   * @example
   * ResourceUtilization
   */
  topicCode?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationDomain: 'EvaluationDomain',
      language: 'Language',
      lensCode: 'LensCode',
      regionId: 'RegionId',
      topicCode: 'TopicCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationDomain: 'string',
      language: 'string',
      lensCode: 'string',
      regionId: 'string',
      topicCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

