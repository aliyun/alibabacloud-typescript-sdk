// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-datset
   */
  datasetName?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The URI of the file in OSS.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the path of the object with the extension included.
   * 
   * The URI of the file in Photo and Drive Service must be in the pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision} format.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/exampleobject.txt
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

