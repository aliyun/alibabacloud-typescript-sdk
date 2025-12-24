// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameters of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  inputParam?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a687089-d4dd-47d4-9709-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputParam: 'InputParam',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParam: 'string',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

