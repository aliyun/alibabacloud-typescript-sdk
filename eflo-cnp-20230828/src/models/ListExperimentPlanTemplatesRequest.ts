// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentPlanTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The sharing level of the template, default is private, options are public and private.
   * 
   * @example
   * private
   */
  privacyLevel?: string;
  static names(): { [key: string]: string } {
    return {
      privacyLevel: 'PrivacyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privacyLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

