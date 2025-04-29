// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults extends $dara.Model {
  /**
   * @example
   * true
   */
  hit?: boolean;
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'hit',
      tagName: 'tagName',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

