// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationInputList extends $dara.Model {
  /**
   * @example
   * dw_project_root
   */
  input?: string;
  /**
   * @example
   * MANUAL
   */
  parseType?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      parseType: 'ParseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      parseType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

