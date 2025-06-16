// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartAuditResultResponseBodyDataErrorItemDetails extends $dara.Model {
  checkId?: string;
  context?: string;
  /**
   * @example
   * 0
   */
  contextOffset?: number;
  /**
   * @example
   * 2
   */
  errorLevel?: number;
  /**
   * @example
   * ”xxx“
   */
  errorWord?: string;
  /**
   * @example
   * ContentAccuracy
   */
  majorCode?: string;
  majorCodeDesc?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  reason?: string;
  /**
   * @example
   * “xxx”
   */
  rightWord?: string;
  /**
   * @example
   * PunctuationError
   */
  subClassCode?: string;
  subClassDesc?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      context: 'Context',
      contextOffset: 'ContextOffset',
      errorLevel: 'ErrorLevel',
      errorWord: 'ErrorWord',
      majorCode: 'MajorCode',
      majorCodeDesc: 'MajorCodeDesc',
      offset: 'Offset',
      reason: 'Reason',
      rightWord: 'RightWord',
      subClassCode: 'SubClassCode',
      subClassDesc: 'SubClassDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      context: 'string',
      contextOffset: 'number',
      errorLevel: 'number',
      errorWord: 'string',
      majorCode: 'string',
      majorCodeDesc: 'string',
      offset: 'number',
      reason: 'string',
      rightWord: 'string',
      subClassCode: 'string',
      subClassDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

