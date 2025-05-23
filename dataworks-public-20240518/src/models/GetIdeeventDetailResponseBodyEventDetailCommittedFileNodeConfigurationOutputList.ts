// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfigurationOutputList extends $dara.Model {
  /**
   * @example
   * dw_project.002_out
   */
  output?: string;
  /**
   * @example
   * ods_user_info_d
   */
  refTableName?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      refTableName: 'RefTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
      refTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

