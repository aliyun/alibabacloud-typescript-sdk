// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The size of overlapping data between consecutive chunks. The maximum value of this parameter cannot be greater than the value of the ChunkSize parameter.
   * >  This parameter prevents context loss caused by data truncation. For example, when you upload long text, you can retain specific overlapping text content between consecutive chunks for better context understanding.
   * 
   * @example
   * 50
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * The strategy for processing large data: the size of each chunk when data is split into smaller parts. Maximum value: 2048.
   * 
   * @example
   * 250
   */
  chunkSize?: number;
  /**
   * @remarks
   * The name of the document collection.
   * >Created by the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to query the created document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The ID of the instance that has vector engine optimization enabled. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in the target region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the document loader. If you do not specify this parameter, the system automatically selects the corresponding document loader based on the file name extension in the following order. Valid values:
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
   * *   ADBPGLoader (paid, first 3,000 pages free): .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .xlsm, .csv, .txt, .jpg, .jpeg, .png, .bmp, .gif, .md, .html, .epub, .mobi, and .rtf
   * 
   * @example
   * PyMuPDFLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * Specifies whether to perform only document understanding and chunking without vectorization and storage. Default value: false.
   * 
   * >  You can set this parameter to true to check the chunking results and then optimize as needed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file name of the document.
   * 
   * >* The file name must include file name extension, such as .json, .md, or .pdf.
   * >* Supported image file extensions include .bmp, .jpg, .jpeg, .png, and .tiff.
   * >* You can upload images by using an archive. The archive file name must include file name extension. Supported archive extensions include .tar, .gz, and .zip.
   * 
   * This parameter is required.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The publicly accessible URL of the document.
   * > Use the SDK to call this operation. The SDK provides a method named UploadDocumentAsyncAdvance that allows you to directly upload local files.
   * If the URL points to an image archive, the number of images in the archive cannot exceed 100.
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
   * The metadata. The value of this parameter must be the same as the Metadata parameter specified when you call the CreateDocumentCollection operation.
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The namespace. Default value: public. You can call the CreateNamespace operation to create a namespace and call the ListNamespaces operation to query the list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace. The value is specified by the CreateNamespace operation.
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
   * The separators used to split large data.
   * > *   This is an important parameter that determines the effectiveness of data chunking. This parameter is related to the splitter specified by the TextSplitterName parameter.
   * >*  In most cases, you do not need to specify this parameter. The server assigns separators based on the value of the TextSplitterName parameter.
   */
  separators?: string[];
  /**
   * @remarks
   * The splitting model to use when DocumentLoaderName is set to ADBPGLoader and TextSplitterName is set to LLMSplitter. Default value: qwen3-8b.
   * > 
   * > Currently supported splitting models:
   * > qwq-plus, qwq-plus-latest,
   * > qwen-max, qwen-max-latest,
   * > qwen-plus, qwen-plus-latest,
   * > qwen-turbo, qwen-turbo-latest,
   * > qwen3-235b-a22b, qwen3-32b, qwen3-30b-a3b,
   * > qwen3-14b, qwen3-8b, qwen3-4b, qwen3-1.7b, qwen3-0.6b,
   * > qwq-32b
   * > qwen2.5-14b-instruct-1m, qwen2.5-7b-instruct-1m
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
   * The name of the text splitter. Valid values:
   * *   **ChineseRecursiveTextSplitter**: inherits from RecursiveCharacterTextSplitter and uses `["
   * 
   * ","
   * ", "。|!|?", "\\.\\s|\\!\\s|\\?\\s", ";|;\\s", ",|,\\s"]` as the default separators with regular expression matching.
   * *   **RecursiveCharacterTextSplitter**: uses `["
   * 
   * ", "
   * ", " ", ""]` as the default separators. This splitter supports splitting code in languages such as C++, Go, Java, JS, PHP, Proto, Python, RST, Ruby, Rust, Scala, Swift, Markdown, LaTeX, HTML, Sol, and C Sharp.
   * *   **SpacyTextSplitter**: uses `
   * 
   * ` as the default separator and the spaCy en_core_web_sm model. This splitter provides better splitting results.
   * *   **MarkdownHeaderTextSplitter**: splits text in the format of [("#", "head1"), ("##", "head2"), ("###", "head3"), ("####", "head4")]. This splitter is suitable for Markdown text.
   * *   **LLMSplitter**: uses an LLM to split text. The default model is qwen3-8b. This splitter takes effect only when ADBPGLoader is selected as the document loader.
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
   * > - For complex documents with disorganized layouts and formats, enable VL-enhanced content recognition.
   * > - After VL-enhanced content recognition is enabled, document processing takes longer.
   * > - After VL-enhanced content recognition is enabled, images in the document cannot be stored or recalled.
   * 
   * @example
   * false
   */
  vlEnhance?: boolean;
  /**
   * @remarks
   * Specifies whether to enable title enhancement.
   * >You can identify the title text, mark the text in the metadata, and then combine the text with the upper-level title for text enhancement.
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
      metadata: 'Metadata',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      separators: 'Separators',
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
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      separators: { 'type': 'array', 'itemType': 'string' },
      splitterModel: 'string',
      textSplitterName: 'string',
      vlEnhance: 'boolean',
      zhTitleEnhance: 'boolean',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.separators)) {
      $dara.Model.validateArray(this.separators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

