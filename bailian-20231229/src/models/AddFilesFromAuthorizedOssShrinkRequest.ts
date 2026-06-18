// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilesFromAuthorizedOssShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the target category for file import. This is the `CategoryId` returned by the AddCategory operation. You can also obtain the category ID from the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - Files tab<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) - Files tab by clicking the ID icon next to the category name. You can also pass in default, which uses the system-created "Default Category".
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * Category type. Optional. The default value is UNSTRUCTURED. Valid values:
   * - UNSTRUCTURED: Category used for building knowledge base scenarios.
   * 
   * <props="china">
   * 
   * > This operation does not support importing SESSION_FILE used for agent application [session interaction](https://help.aliyun.com/zh/model-studio/user-guide/file-interaction). Please use the **AddFile** operation to upload SESSION_FILE from local.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The list of files to import. Up to 10 files can be uploaded at a time.
   * > Up to 10 files can be uploaded at a time.
   * >
   * 
   * This parameter is required.
   */
  fileDetailsShrink?: string;
  /**
   * @remarks
   * The OSS Bucket name. For details, see [Buckets](https://help.aliyun.com/document_detail/177682.html).
   * 
   * This parameter is required.
   * 
   * @example
   * bucketNamexxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS Bucket. For how to obtain it, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  ossRegionId?: string;
  /**
   * @remarks
   * Whether to overwrite the same file in the category by OssKey. The default value is false, meaning no overwrite.
   * 
   * @example
   * false
   */
  overWriteFileByOssKey?: boolean;
  /**
   * @remarks
   * The list of tags associated with the file. The default is empty, meaning the file is not associated with any tags. Up to 10 tags can be passed in.
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

