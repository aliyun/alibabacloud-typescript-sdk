// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterRequestApiServerCustomCertSans extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite or add SANs. Valid values:
   * 
   * *   overwrite: overwrites SANs.
   * *   append: adds SANs.
   * 
   * @example
   * append
   */
  action?: string;
  /**
   * @remarks
   * The list of SANs.
   */
  subjectAlternativeNames?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      subjectAlternativeNames: 'subject_alternative_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

