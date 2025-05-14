// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProcessDefinitionResponseBodyOwnersMasterDataDepartments extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * development department
   */
  deptNameInEnglish?: string;
  /**
   * @example
   * develop-A
   */
  deptNo?: string;
  /**
   * @example
   * 总部-开发部
   */
  deptPath?: string;
  /**
   * @example
   * xxafafaf
   */
  humanSourceGroupOrderNumber?: string;
  /**
   * @example
   * 123311221
   */
  humanSourceGroupWorkNo?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 1732245789
   */
  masterWorkNo?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      deptNameInEnglish: 'DeptNameInEnglish',
      deptNo: 'DeptNo',
      deptPath: 'DeptPath',
      humanSourceGroupOrderNumber: 'HumanSourceGroupOrderNumber',
      humanSourceGroupWorkNo: 'HumanSourceGroupWorkNo',
      id: 'Id',
      masterWorkNo: 'MasterWorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      deptNameInEnglish: 'string',
      deptNo: 'string',
      deptPath: 'string',
      humanSourceGroupOrderNumber: 'string',
      humanSourceGroupWorkNo: 'string',
      id: 'number',
      masterWorkNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

