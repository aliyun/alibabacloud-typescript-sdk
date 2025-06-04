// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the dataset.
   */
  description?: string;
  edition?: string;
  /**
   * @remarks
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names starting with PAI are basic role names, and the names starting with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
   * 
   * *   If you set the value to ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"], the account of the specified role is granted the read and write permissions.
   * *   If you set the value to ["\\*"], all accounts are granted the read and write permissions.
   * *   If you set the value to [], only the creator of the dataset has the read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name. You can call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to obtain the dataset name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended field, which is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can set mountPath to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      edition: 'Edition',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      edition: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

