// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * test09
   */
  displayName?: string;
  /**
   * @remarks
   * The input configuration of the playbook.
   * 
   * @example
   * {\\"key1\\": \\"value1\\", \\"key2\\": \\"value2\\"}
   */
  inputParams?: string;
  /**
   * @remarks
   * The language of the messages to receive. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The output configuration of the playbook.
   * 
   * @example
   * {\\"result\\": \\"success\\"}
   */
  outputParams?: string;
  /**
   * @remarks
   * The configuration format of the playbook.
   * 
   * - **xml**: XML format.
   * 
   * - **x6**: JSON format.
   * 
   * @example
   * x6
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      inputParams: 'InputParams',
      lang: 'Lang',
      outputParams: 'OutputParams',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      inputParams: 'string',
      lang: 'string',
      outputParams: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

