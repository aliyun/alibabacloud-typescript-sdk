// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The flag that indicates whether the playbook is of the debugging or published version. Valid values:
   * 
   * *   **1**: playbook of the debugging version
   * *   **0**: playbook of the published version
   * 
   * @example
   * 0
   */
  debugFlag?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 hash value of the playbook.
   * 
   * @example
   * 7a8f608dc64c242632aa578xxxxx
   */
  taskflowMd5?: string;
  static names(): { [key: string]: string } {
    return {
      debugFlag: 'DebugFlag',
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      taskflowMd5: 'TaskflowMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugFlag: 'number',
      lang: 'string',
      playbookUuid: 'string',
      taskflowMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

