// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DumpMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the metadata export task.
   * >To obtain the export task ID, call the [metadata export](https://help.aliyun.com/document_detail/377466.html) operation first and retrieve the ID from the response.
   * 
   * @example
   * 500
   */
  id?: number;
  /**
   * @remarks
   * The name of the Image Search instance. The name can be up to 20 characters in length.
   * If you have purchased an Image Search instance, log on to the [Image Search console](https://imagesearch.console.aliyun.com/) to view the instance name.
   * If you have not purchased an Image Search instance, refer to [Activate the service](https://help.aliyun.com/document_detail/179178.html) and [Create an instance](https://help.aliyun.com/document_detail/66569.html).
   * >The instance name is not the instance ID. The instance name must be unique within the same region. Make sure you distinguish between the two.
   * 
   * This parameter is required.
   * 
   * @example
   * demoinstance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the returned results. Default value: 1. Maximum value: 30.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return. Default value: 10. Maximum value: 30.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

