// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the files are imported. This is the `CategoryId` returned by the AddCategory operation. You can also obtain the category ID by clicking the ID icon next to the category name on the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab. You can pass in `default` to use the system-created default category.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The category type. Optional. Default value: UNSTRUCTURED. Valid values:
   * - UNSTRUCTURED: category for building knowledge base scenarios.
   * 
   * <props="china">
   * 
   * > This operation does not support importing SESSION_FILE for agent application [conversation interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction). Use the **AddFile** operation to upload SESSION_FILE from a local source.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The list of files to import. A maximum of 10 files can be uploaded at a time.
   * > A maximum of 10 files can be uploaded at a time.
   * >
   * 
   * This parameter is required.
   */
  fileDetailsShrink?: string;
  /**
   * @remarks
   * The name of the OSS bucket. For more information, see [Buckets](https://help.aliyun.com/document_detail/177682.html).
   * 
   * This parameter is required.
   * 
   * @example
   * bucketNamexxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite files with the same OssKey in the category. Default value: false, which means files are not overwritten.
   * 
   * @example
   * false
   */
  overWriteFileByOssKey?: boolean;
  /**
   * @remarks
   * The list of tags associated with the file. Default value: empty, which means the file is not associated with any tags. A maximum of 10 tags can be specified.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      fileDetailsShrink: 'FileDetails',
      ossBucketName: 'OssBucketName',
      ossRegionId: 'OssRegionId',
      overWriteFileByOssKey: 'OverWriteFileByOssKey',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryType: 'string',
      fileDetailsShrink: 'string',
      ossBucketName: 'string',
      ossRegionId: 'string',
      overWriteFileByOssKey: 'boolean',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

