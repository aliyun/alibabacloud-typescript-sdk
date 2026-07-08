// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssUploadPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario, such as knowledge.
   * 
   * @example
   * default
   */
  scenario?: string;
  static names(): { [key: string]: string } {
    return {
      scenario: 'Scenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

