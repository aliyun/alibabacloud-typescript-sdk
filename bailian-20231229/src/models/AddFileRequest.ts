// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFileRequestParserConfig extends $dara.Model {
  /**
   * @example
   * qwen-vl-max
   */
  modelName?: string;
  /**
   * @example
   * #角色 你是一个专业的图片内容标注人员，擅长识别并描述出图片中的内容。 # 任务目标 请结合输入图片，详细描述图片中的内容。
   */
  modelPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'ModelName',
      modelPrompt: 'ModelPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFileRequest extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the category to which the document is uploaded. This parameter corresponds to the `CategoryId` returned by the [AddCategory](https://www.alibabacloud.com/help/eh/model-studio/developer-reference/api-bailian-2023-12-29-addcategory) operation. You can also click the ID icon next to the category name on the Unstructured Data tab of the [Application Data](https://modelstudio.console.alibabacloud.com/#/data-center) page to view the ID. You can set the parameter to default, which specifies the Default Category created by the system.
   * 
   * This parameter is required.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3510024405
   */
  categoryId?: string;
  /**
   * @remarks
   * The type of the category. Valid values:
   * - UNSTRUCTURED
   * - SESSION_FILE
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The lease ID, which corresponds to the `FileUploadLeaseId` parameter returned by the [ApplyFileUploadLease](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-applyfileuploadlease) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 68abd1dea7b6404d8f7d7b9f7fbd332d.1716698936847
   */
  leaseId?: string;
  /**
   * @example
   * https://thisistest.com/abc.pdf
   */
  originalFileUrl?: string;
  /**
   * @remarks
   * The parser. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: Intelligent document parsing by Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  parserConfig?: AddFileRequestParserConfig;
  /**
   * @remarks
   * A list of tags associated with the document. The default value is null, which means no tags. You can specify up to 10 tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryType: 'CategoryType',
      leaseId: 'LeaseId',
      originalFileUrl: 'OriginalFileUrl',
      parser: 'Parser',
      parserConfig: 'ParserConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryType: 'string',
      leaseId: 'string',
      originalFileUrl: 'string',
      parser: 'string',
      parserConfig: AddFileRequestParserConfig,
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.parserConfig && typeof (this.parserConfig as any).validate === 'function') {
      (this.parserConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

