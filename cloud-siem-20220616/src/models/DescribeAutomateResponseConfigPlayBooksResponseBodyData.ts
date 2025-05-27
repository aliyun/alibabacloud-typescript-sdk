// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutomateResponseConfigPlayBooksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * Waf Block IP
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  name?: string;
  /**
   * @remarks
   * The input parameter template of the playbook. Valid values:
   * 
   * *   template-ip: IP address
   * *   template-process: process
   * *   template-filee: file
   * 
   * @example
   * template-ip
   */
  paramType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * system_aliyun_clb_process_book
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      paramType: 'ParamType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
      paramType: 'string',
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

