// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterventionDictionaryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the analyzer. Valid values:
   * 
   * - MODEL: a model-based custom analyzer.
   * 
   * - SYSTEM: a system analyzer.
   * 
   * - USER: a custom analyzer.
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
   * - stopword: an intervention dictionary for stop word filtering.
   * 
   * - synonym: an intervention dictionary for synonym configuration.
   * 
   * - correction: an intervention dictionary for spelling correction.
   * 
   * - category_prediction: an intervention dictionary for category prediction.
   * 
   * - ner: an intervention dictionary for Named Entity Recognition (NER).
   * 
   * - term_weighting: an intervention dictionary for term weight analysis.
   * 
   * - suggest_allowlist: a drop-down suggestion whitelist.
   * 
   * - suggest_denylist: a drop-down suggestion blacklist.
   * 
   * - hot_allowlist: a top search whitelist.
   * 
   * - hot_denylist: a top search blacklist.
   * 
   * - hint_allowlist: a hint whitelist.
   * 
   * - hint_denylist: a hint blacklist.
   * 
   * @example
   * ner
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The default value is false.
   * 
   * Valid values:
   * 
   * - **true**: Validates the request parameters but does not create the intervention dictionary.
   * 
   * - **false**: Validates the request parameters and creates the intervention dictionary.
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

