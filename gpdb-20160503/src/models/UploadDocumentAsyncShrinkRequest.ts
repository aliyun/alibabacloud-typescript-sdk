// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The size of overlapping data between consecutive chunks. The maximum value of this parameter cannot be greater than the value of the ChunkSize parameter.
   * > This parameter is used to prevent context loss caused by data truncation. For example, when you upload long text, you can retain specific overlapping text content between consecutive chunks to better understand the context.
   * 
   * @example
   * 50
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * The strategy for processing large amounts of data: the size of each chunk when data is split into smaller parts. Maximum value: 2048.
   * 
   * @example
   * 250
   */
  chunkSize?: number;
  /**
   * @remarks
   * The name of the document collection.
   * > Created by the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to view the created document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The ID of the instance for which vector engine optimization and acceleration is enabled. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in the target region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the document loader. If you do not specify this parameter, the system automatically selects the corresponding document loader in the following order based on the file name extension. Valid values:
   * *   UnstructuredHTMLLoader: .html
   * *   UnstructuredMarkdownLoader: .md
   * *   PyMuPDFLoader: .pdf
   * *   PyPDFLoader: .pdf
   * *   RapidOCRPDFLoader: .pdf
   * *   PDFWithImageRefLoader: .pdf (with the text-image association feature)
   * *   JSONLoader: .json
   * *   CSVLoader: .csv
   * *   RapidOCRLoader: .png, .jpg, .jpeg, and .bmp
   * *   UnstructuredFileLoader: .eml, .msg, .rst, .txt, .docx, .epub, .odt, .pptx, and .tsv
   * *   ADBPGLoader (paid, first 3,000 pages are free): .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .xlsm, .csv, .txt, .jpg, .jpeg, .png, .bmp, .gif, .md, .html, .epub, .mobi, and .rtf
   * 
   * @example
   * PyMuPDFLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * Specifies whether to only perform document understanding and chunking without vectorization and storage. Default value: false.
   * 
   * > You can set this parameter to true to check the chunking effect and then optimize it as needed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file name of the document.
   * 
   * >* The file name must file name extension. Examples: .json, .md, and .pdf.
   * >* Supported image file extensions include .bmp, .jpg, .jpeg, .png, and .tiff.
   * >* You can use a compressed package to upload images. The file name of the compressed package must file name extension. Supported compressed package extensions include .tar, .gz, and .zip.
   * 
   * This parameter is required.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The URL for public access to the document.
   * > We recommend that you use an SDK to call this operation. The SDK provides a method named UploadDocumentAsyncAdvance, which allows you to directly upload local files.
   * If the URL points to an image archive, the number of images in the current archive must not exceed 100.
   * 
   * >Notice: 
   * The maximum size of an image uploaded by using multimodal-embedding-v1 is 3 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xx/mydoc.txt
   */
  fileUrl?: string;
  /**
   * @remarks
   * The metadata. The value of this parameter must be the same as the Metadata parameter specified when the CreateDocumentCollection operation is called.
   * 
   * @example
   * {"title":"mytitle","page":1}
   */
  metadataShrink?: string;
  /**
   * @remarks
   * The namespace. Default value: public. You can call the CreateNamespace operation to create a namespace and call the ListNamespaces operation to view the namespace list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password corresponding to the namespace. This value is specified when the CreateNamespace operation is called.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The separators used to split large amounts of data.
   * > *   This is an important parameter that determines the effect of data chunking. This parameter is related to the splitter specified by the TextSplitterName parameter.
   * >*  In most cases, you do not need to specify this parameter. The server assigns separators based on the value of the TextSplitterName parameter.
   */
  separatorsShrink?: string;
  /**
   * @remarks
   * The splitting model. This parameter can be specified when ADBPGLoader is selected for DocumentLoaderName and LLMSplitter is selected for TextSplitterName. Default value: qwen3-8b.
   * > 
   * > Supported splitting models:
   * > qwq-plus, qwq-plus-latest,
   * > qwen-max, qwen-max-latest,
   * > qwen-plus, qwen-plus-latest,
   * > qwen-turbo, qwen-turbo-latest,
   * > qwen3-235b-a22b, qwen3-32b, qwen3-30b-a3b,
   * > qwen3-14b, qwen3-8b, qwen3-4b, qwen3-1.7b, qwen3-0.6b,
   * > qwq-32b,
   * > qwen2.5-14b-instruct-1m, qwen2.5-7b-instruct-1m,
   * > qwen2.5-72b-instruct, qwen2.5-32b-instruct,
   * > qwen2.5-14b-instruct, qwen2.5-7b-instruct,
   * > qwen2.5-3b-instruct, qwen2.5-1.5b-instruct, qwen2.5-0.5b-instruct
   * 
   * @example
   * qwen3-8b
   */
  splitterModel?: string;
  /**
   * @remarks
   * The name of the splitter. Valid values:
   * *   **ChineseRecursiveTextSplitter**: Inherits from RecursiveCharacterTextSplitter. By default, `["
   * 
   * ","
   * ", "。|!|?", "\.\s|\!\s|\?\s", ";|;\s", ",|,\s"]` is used as the separator, and regular expressions are used to match text.
   * *   **RecursiveCharacterTextSplitter**: By default, `["
   * 
   * ", "
   * ", " ", ""]` is used as the separator. This splitter supports splitting code in languages such as C++, Go, Java, JS, PHP, Proto, Python, RST, Ruby, Rust, Scala, Swift, Markdown, LaTeX, HTML, Sol, and C Sharp.
   * *   **SpacyTextSplitter**: By default, `
   * 
   * ` is used as the separator, and the en_core_web_sm model of spaCy is used. This splitter can achieve better splitting effects.
   * *   **MarkdownHeaderTextSplitter**: Splits text in the format of `[("#", "head1"), ("##", "head2"), ("###", "head3"), ("####", "head4")]`. This splitter is suitable for Markdown text.
   * *   **LLMSplitter**: Uses an LLM to split text. The default model is qwen3-8b. Currently, this splitter takes effect only when ADBPGLoader is selected.
   * 
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitterName?: string;
  /**
   * @remarks
   * Specifies whether to enable VL-enhanced content recognition for complex documents. Default value: false.
   * 
   * > 
   * > - For complex documents with messy layouts and formats, we recommend that you enable VL-enhanced content recognition.
   * > - After you enable VL-enhanced content recognition, document processing takes a longer time.
   * > - After you enable VL-enhanced content recognition, images in the document cannot be stored or recalled.
   * 
   * @example
   * false
   */
  vlEnhance?: boolean;
  /**
   * @remarks
   * Specifies whether to enable title enhancement.
   * > You can identify the title text, mark the text in the metadata, and then combine the text with the previous-level title to achieve text enhancement.
   * 
   * @example
   * false
   */
  zhTitleEnhance?: boolean;
  static names(): { [key: string]: string } {
    return {
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      documentLoaderName: 'DocumentLoaderName',
      dryRun: 'DryRun',
      fileName: 'FileName',
      fileUrl: 'FileUrl',
      metadataShrink: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      separatorsShrink: 'Separators',
      splitterModel: 'SplitterModel',
      textSplitterName: 'TextSplitterName',
      vlEnhance: 'VlEnhance',
      zhTitleEnhance: 'ZhTitleEnhance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkOverlap: 'number',
      chunkSize: 'number',
      collection: 'string',
      DBInstanceId: 'string',
      documentLoaderName: 'string',
      dryRun: 'boolean',
      fileName: 'string',
      fileUrl: 'string',
      metadataShrink: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      separatorsShrink: 'string',
      splitterModel: 'string',
      textSplitterName: 'string',
      vlEnhance: 'boolean',
      zhTitleEnhance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

