// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">
   * 
   * - When CategoryType is set to UNSTRUCTURED, specify the category ID to which the uploaded file belongs. This is the `CategoryId` returned by the **AddCategory** operation. You can also go to [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) > File tab and click the ID icon next to the category name to obtain the category ID. You can set this parameter to default to use the system-created "Default Category".
   * 
   * - When CategoryType is set to SESSION_FILE, set this parameter to "default".
   * 
   * 
   * <props="intl">
   * 
   * Specify the category ID to which the uploaded file belongs. This is the `CategoryId` returned by the **AddCategory** operation. You can also go to [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) > File tab and click the ID icon next to the category name to obtain the category ID. You can set this parameter to default to use the system-created "Default Category".
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
   * - UNSTRUCTURED: category, used for building knowledge base scenarios.
   * 
   * <props="china">
   * - SESSION_FILE: a file used for [conversation interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction) in agent applications.
   * <note>When using `SESSION_FILE`, the CategoryType parameter must also be set to `SESSION_FILE` when calling the ApplyFileUploadLease operation.</note>
   * <note>The file is valid only for the current user session. After the user closes the session, the file expires (maximum validity period is 7 days) and long-term storage is not supported.</note>
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The upload lease ID, which corresponds to the `FileUploadLeaseId` returned by the **ApplyFileUploadLease** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 68abd1dea7b6404d8f7d7b9f7fbd332d.17166xxxxxxxx
   */
  leaseId?: string;
  /**
   * @remarks
   * <props="china">
   * 
   * Adds a URL to the file through this parameter. The system records this link when building a [document search knowledge base](https://help.aliyun.com/document_detail/2807740.html). When you use the Alibaba Cloud Model Studio console to chat with an [agent application](https://help.aliyun.com/document_detail/2842749.html), this URL is returned with the file retrieval results (through the `docUrl` field).
   * 
   * > The agent application must have **Knowledge Base** enabled and the **Show Answer Sources** feature turned on. Otherwise, this parameter does not take effect.
   * 
   * 
   * 
   * <props="intl">
   * 
   * Adds a URL to the file through this parameter. The system records this link when building a [document search knowledge base](https://help.aliyun.com/document_detail/2807740.html). When you use the Alibaba Cloud Model Studio console to chat with an [agent application](https://help.aliyun.com/document_detail/2842749.html), this URL is returned with the file retrieval results (through the `docUrl` field).
   * 
   * > The agent application must have **Knowledge Base** enabled and the **Show Answer Sources** feature turned on. Otherwise, this parameter does not take effect.
   * 
   * @example
   * www.test.com/111.docx
   */
  originalFileUrl?: string;
  /**
   * @remarks
   * The parser type. Valid values:
   * 
   * - DOCMIND: intelligent document parsing.
   * - DOCMIND_DIGITAL: electronic document parsing.
   * - DOCMIND_LLM_VERSION: large language model-based document parsing.
   * - DASH_QWEN_VL_PARSER: Qwen VL parsing.
   * - DOCMIND_LLM_VERSION_MEDIA: audio and video parsing.
   * - AUTO_SELECT: automatic parser selection.
   * 
   * <props="intl">
   * <note>The file you upload is parsed by the currently specified parser. If you set this parameter to AUTO_SELECT, the parser configured for the category is used.</note>
   * 
   * 
   * <props="china">
   * <note>When CategoryType is set to UNSTRUCTURED, the parser parses the uploaded file based on the data parsing settings of the current category.</note>
   * <note>When CategoryType is set to SESSION_FILE, the system parses the file content by using the default method, which cannot be changed.</note>
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO_SELECT
   */
  parser?: string;
  /**
   * @remarks
   * The parser configuration. This parameter is required only when the parser type is set to Qwen VL parsing.
   */
  parserConfigShrink?: string;
  /**
   * @remarks
   * - The list of tags associated with the file. You can specify up to 100 tags, and the total character length of all tags cannot exceed 700.
   * - Default value: empty, which means no tags are set.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      leaseId: 'LeaseId',
      originalFileUrl: 'OriginalFileUrl',
      parser: 'Parser',
      parserConfigShrink: 'ParserConfig',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryType: 'string',
      leaseId: 'string',
      originalFileUrl: 'string',
      parser: 'string',
      parserConfigShrink: 'string',
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

