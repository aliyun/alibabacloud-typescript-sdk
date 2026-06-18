// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksRequest extends $dara.Model {
  /**
   * @remarks
   * An array of field names used to filter non-private fields (those not prefixed with an underscore _) in the Metadata field returned by this operation. By default, Fields is empty, and all non-private fields in Metadata are returned. To return only specific non-private fields in Metadata, such as title, pass title in this parameter.
   * 
   * Default value: empty.
   */
  fields?: string[];
  /**
   * @remarks
   * <props="china">
   * 
   * The file ID, which is the `FileId` returned by the **AddFile** operation. This field is not required for data query or image Q&A knowledge bases. This field is required for document search or audio/video search knowledge bases. You can also obtain the file ID by clicking the ID icon next to the file name on the Files tab of [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center). You can use the file ID to filter the returned chunks. Default value: empty.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * The file ID, which is the `FileId` returned by the **AddFile** operation. This field is not required for data query or image Q&A knowledge bases. This field is required for document search knowledge bases. You can also obtain the file ID by clicking the ID icon next to the file name on the Files tab of
   * [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center). You can use the file ID to filter the returned chunks. Default value: empty.
   * 
   * .
   * 
   * @example
   * file_5f03dfea56da4050ab68d61871fc4cb3_xxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The file ID field in the legacy Model Studio SDK. The usage and default value are identical to those of the `FileId` field. If you are using the following versions (or later) of the Model Studio SDK, use the `FileId` field instead. If you are using the SWIFT Model Studio SDK, continue to use this field.
   * 
   * - Java (async): 1.0.18
   * - Java: 1.10.2
   * - TypeScript: 1.10.2
   * - Go: 1.10.2
   * - PHP: 1.10.2
   * - Python: 1.10.2
   * - C#: 1.10.2
   * - C++: 1.10.17
   * 
   * > **How to check the Model Studio SDK version**: Visit the <props="china">[Model Studio SDK center](https://api.aliyun.com/api-tools/sdk/bailian?version=2023-12-29)<props="intl">[Model Studio SDK center](https://api.alibabacloud.com/api-tools/sdk/bailian?version=2023-12-29), click "**Install**" in the left-side navigation pane, set the API version to "**2023-12-29**", select your programming language, and then click "**History Versions**" to view the version.
   * 
   * @example
   * file_5f03dfea56da4050ab68d61871fc4cb3_xxxxxxxx
   */
  filed?: string;
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * otoru9xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The page number to query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of text chunks to display per page in a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      fileId: 'FileId',
      filed: 'Filed',
      indexId: 'IndexId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      fileId: 'string',
      filed: 'string',
      indexId: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

