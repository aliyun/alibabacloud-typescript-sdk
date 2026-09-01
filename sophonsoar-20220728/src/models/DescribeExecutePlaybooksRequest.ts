// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type of the input parameter for the playbook. To query multiple entity types, separate them with commas.
   * 
   * - **ip**: IP entity.
   * 
   * - **file**: file entity.
   * 
   * - **process**: process entity.
   * 
   * - **incident**: event entity.
   * 
   * @example
   * ip,file,process,host
   */
  inputMode?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the input parameter for the playbook.
   * 
   * - **template-ip**: IP request template.
   * 
   * - **template-file**: file request template.
   * 
   * - **template-process**: process request template.
   * 
   * - **custom**: custom parameter.
   * 
   * @example
   * custom
   */
  paramType?: string;
  /**
   * @remarks
   * The name of the playbook. Fuzzy search is supported.
   * 
   * @example
   * demo_test
   */
  playbookName?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
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

