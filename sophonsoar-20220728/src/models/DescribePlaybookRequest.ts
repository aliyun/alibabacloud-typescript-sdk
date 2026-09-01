// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * A flag that indicates whether the version is a published version or a debug version. Valid values:
   * 
   * - **1**: retrieves the debug version.
   * 
   * - **0**: retrieves the published version.
   * 
   * @example
   * 0
   */
  debugFlag?: number;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 9030076b-6733-4842-b05a-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration.
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

