// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackInstancesRequestDeploymentTargets extends $dara.Model {
  accountIds?: string[];
  /**
   * @remarks
   * The folder IDs of the resource directory. You can add up to five folder IDs.
   * 
   * You can create stacks within all the member accounts in the specified folders. If you create stacks in the Root folder, the stacks are created within all member accounts in the resource directory.
   * 
   * > To view the folder IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the basic information about a folder](https://help.aliyun.com/document_detail/111223.html).
   */
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.rdFolderIds)) {
      $dara.Model.validateArray(this.rdFolderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

