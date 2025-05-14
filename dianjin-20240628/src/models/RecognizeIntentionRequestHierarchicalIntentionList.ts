// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIntentionRequestHierarchicalIntentionList extends $dara.Model {
  description?: string;
  intention?: string;
  /**
   * @example
   * 1810929291010150400
   */
  intentionCode?: string;
  intentionScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      intention: 'intention',
      intentionCode: 'intentionCode',
      intentionScript: 'intentionScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      intention: 'string',
      intentionCode: 'string',
      intentionScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

