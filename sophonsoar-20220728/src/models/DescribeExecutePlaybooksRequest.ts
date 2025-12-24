// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type of the script input parameter. When you want to query multiple entity types, separate them with commas.
   * - **ip**: IP entity.
   * - **file**: file entity.
   * - **process**: process entity.
   * - **incident**: incident entity.
   * 
   * @example
   * ip,file,process,host
   */
  inputMode?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The input parameter type of the playbook.
   * 
   * *   **template-ip**
   * *   **template-file**
   * *   **template-process**
   * *   **custom**
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The playbook name. Fuzzy search is supported.
   * 
   * @example
   * demo_test
   */
  playbookName?: string;
  /**
   * @remarks
   * The playbook UUID.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the playbook UUID.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      inputMode: 'InputMode',
      lang: 'Lang',
      paramType: 'ParamType',
      playbookName: 'PlaybookName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputMode: 'string',
      lang: 'string',
      paramType: 'string',
      playbookName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

