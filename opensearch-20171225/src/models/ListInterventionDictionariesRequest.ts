// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionariesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
   * 
   * @example
   * ["synonym"]
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

