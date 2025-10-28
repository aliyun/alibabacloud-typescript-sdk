// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertDeployGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413-***********
   */
  appId?: string;
  /**
   * @remarks
   * The name of the instance group. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The version of the initial deployment package associated with the instance group. You can call the ListHistoryDeployVersion operation to query the version. For more information, see [ListHistoryDeployVersion](https://help.aliyun.com/document_detail/149392.html).
   * 
   * @example
   * 441beb18-da42-44dc-****-****
   */
  initPackageVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupName: 'GroupName',
      initPackageVersionId: 'InitPackageVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupName: 'string',
      initPackageVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

