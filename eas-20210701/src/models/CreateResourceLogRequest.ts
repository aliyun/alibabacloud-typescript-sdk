// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service (SLS) Logstore. For more information about how to query Logstores, see [ListLogStores](https://help.aliyun.com/document_detail/426970.html).
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) project for the resource group. The project must be created in Simple Log Service in advance. This operation does not support automatic creation of the project. You can call the ListProject operation to query existing projects, or call the CreateProject operation to create a project first.
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

