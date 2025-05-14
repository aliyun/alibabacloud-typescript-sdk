// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryResponseBodyDataIndexSettingQueryEnhancer extends $dara.Model {
  /**
   * @example
   * true
   */
  enableFollowUp?: boolean;
  /**
   * @example
   * true
   */
  enableMultiQuery?: boolean;
  /**
   * @example
   * true
   */
  enableOpenQa?: boolean;
  /**
   * @example
   * true
   */
  enableQueryRewrite?: boolean;
  /**
   * @example
   * true
   */
  enableSession?: boolean;
  /**
   * @example
   * 2836482634
   */
  localKnowledgeId?: string;
  /**
   * @example
   * true
   */
  withDocumentReference?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableFollowUp: 'enableFollowUp',
      enableMultiQuery: 'enableMultiQuery',
      enableOpenQa: 'enableOpenQa',
      enableQueryRewrite: 'enableQueryRewrite',
      enableSession: 'enableSession',
      localKnowledgeId: 'localKnowledgeId',
      withDocumentReference: 'withDocumentReference',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFollowUp: 'boolean',
      enableMultiQuery: 'boolean',
      enableOpenQa: 'boolean',
      enableQueryRewrite: 'boolean',
      enableSession: 'boolean',
      localKnowledgeId: 'string',
      withDocumentReference: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

