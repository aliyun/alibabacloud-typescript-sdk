// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The Logstore of Log Service. For more information about how to query a Logstore, see [ListLogStores](https://help.aliyun.com/document_detail/426970.html).
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group. For more information about how to query the project, see [ListProject](https://help.aliyun.com/document_detail/74955.html).
   * 
   * This parameter is required.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

