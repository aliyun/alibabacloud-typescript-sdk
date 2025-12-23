// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterventionDictionaryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the analyzer. Valid values:
   * 
   * *   MODEL: model-based custom analyzer.
   * *   SYSTEM: system analyzer.
   * *   USER: custom analyzer.
   * 
   * @example
   * SYSTEM
   */
  analyzerType?: string;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * ner_dict_ec
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering.
   * *   synonym: an intervention dictionary for synonym configuration.
   * *   correction: an intervention dictionary for spelling correction.
   * *   category_prediction: an intervention dictionary for category prediction.
   * *   ner: an intervention dictionary for named entity recognition (NER).
   * *   term_weighting: an intervention dictionary for term weight analysis.
   * *   suggest_allowlist: a drop-down suggestion whitelist.
   * *   suggest_denylist: a drop-down suggestion blacklist.
   * *   hot_allowlist: a top search whitelist.
   * *   hot_denylist: a top search blacklist.
   * *   hint_allowlist: a hint whitelist.
   * *   hint_denylist: a hint blacklist.
   * 
   * @example
   * ner
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      name: 'name',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
      name: 'string',
      type: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

