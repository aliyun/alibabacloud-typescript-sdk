// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the playbook.
   * 
   * @example
   * This is a new version
   */
  description?: string;
  /**
   * @remarks
   * Name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * test09
   */
  displayName?: string;
  /**
   * @example
   * {\"key1\": \"value1\", \"key2\": \"value2\"}
   */
  inputParams?: string;
  /**
   * @remarks
   * Language type for receiving messages. Values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * {\"result\": \"success\"}
   */
  outputParams?: string;
  /**
   * @remarks
   * Playbook TaskFlow type.
   * - **x6** : x6
   * - **bpmn**: bpmn
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

