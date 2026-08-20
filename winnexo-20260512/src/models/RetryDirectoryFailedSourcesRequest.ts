// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDirectoryFailedSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise knowledge base folder. Failed resources in the folder and its subfolders are included recursively.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

