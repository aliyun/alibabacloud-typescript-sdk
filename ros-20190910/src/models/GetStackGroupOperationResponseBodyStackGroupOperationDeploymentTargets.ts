// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets extends $dara.Model {
  /**
   * @remarks
   * The IDs of the members in the resource directory.
   * 
   * > This parameter is returned only if AccountIds is specified when the [UpdateStackInstances](https://help.aliyun.com/document_detail/151716.html) operation is called to update stack instances.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The IDs of the folders in the resource directory.
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

