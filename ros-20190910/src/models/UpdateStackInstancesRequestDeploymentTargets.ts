// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackInstancesRequestDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the member accounts in the resource directory. You can specify up to 20 member account IDs.
   * 
   * > To view the member account IDs, go to the **Overview** page in the **Resource Management** console. For more information, see [View the details of a member](https://help.aliyun.com/document_detail/111624.html).
   */
  accountIds?: string[];
  /**
   * @remarks
   * The folder IDs of the resource directory.
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

