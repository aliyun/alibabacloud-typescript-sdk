// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The size of data that is overlapped between consecutive chunks. The maximum value of this parameter cannot be greater than the value of the ChunkSize parameter.
   * 
   * >  This parameter is used to prevent context missing that may occur due to data truncation. For example, when you upload a long text, you can retain specific overlapped text content between consecutive chunks to better understand the context.
   * 
   * @example
   * 50
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * Strategy for processing large data: the size of each chunk when the data is split into smaller parts. Maximum value is 2048.
   * 
   * @example
   * 250
   */
  chunkSize?: number;
  /**
   * @remarks
   * The name of the document library. 
   * > Created by the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) API. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) API to view the document libraries that have already been created.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * Instance ID with vector engine optimization acceleration enabled. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies the document loader to use for processing the file. If this parameter is omitted, the system automatically selects a loader based on the file\\"s extension.Valid Values:[List of valid loader names would go here] Valid values:
   * 
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
   * *   ADBPGLoader (free of charge for the first 3,000 pages): .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .xlsm, .csv, .txt, .jpg, .jpeg, .png, .bmp, .gif, .md, .html, .epub, .mobi, and .rtf
   * 
   * @example
   * PyMuPDFLoader
   */
  documentLoaderName?: string;
  /**
   * @remarks
   * Specifies whether to perform only document understanding and chunking, but not vectorization and storage. Default value: false.
   * 
   * >  You can set this parameter to true, check the chunking effect, and then perform optimization if needed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the file being uploaded.
   * 
   * > 
   * 
   * *   File name: .json, .md, and .pdf.
   * 
   * *   Images: .bmp,. jpg,. jpeg,. png, and. tiff.
   * 
   * *   Compressed packages. The package file name must contain an extension: .tar, .gz, and .zip.
   * 
   * This parameter is required.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the publicly accessible document.
   * >  > - It is recommended to call this interface using the SDK, which provides a method called UploadDocumentAsyncAdvance for directly uploading local files. > - If the URL points to an image archive, the number of images in the archive should not exceed 100.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xx/mydoc.txt
   */
  fileUrl?: string;
  /**
   * @remarks
   * The metadata. The value of this parameter must be the same as the Metadata parameter that is specified when you call the CreateDocumentCollection operation.
   */
  metadataShrink?: string;
  /**
   * @remarks
   * Namespace, default is public. You can create one through the CreateNamespace interface and view the list via the ListNamespaces interface.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password corresponding to the namespace.  > This value is specified by the CreateNamespace interface.
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
   * The separators that are used to split large amounts of data.
   * 
   * > 
   * 
   * *   This is an important parameter that determines the chunking effect. This parameter is related to the splitter that is specified by the TextSplitterName parameter.
   * 
   * *   In most cases, you do not need to specify this parameter. The server assigns separators based on the value of the TextSplitterName parameter.
   */
  separatorsShrink?: string;
  /**
   * @remarks
   * When DocumentLoaderName is set to ADBPGLoader and TextSplitterName is set to LLMSplitter, you can specify the splitting model. Default Value: qwen3-8b.
   * 
   * >  Supported splitting models: qwq-plus, qwq-plus-latest, qwen-max, qwen-max-latest, qwen-plus, qwen-plus-latest, qwen-turbo, qwen-turbo-latest, qwen3-235b-a22b, qwen3-32b,qwen3-30b-a3b, qwen3-14b, qwen3-8b, qwen3-4b, qwen3-1.7b, qwen3-0.6b, qwq-32b qwen2.5-14b-instruct-1m, qwen2.5-7b-instruct-1m, qwen2.5-72b-Instruct, qwen2.5-32b-Instruct, qwen2.5-14b-Instruct, qwen2.5-7b-Instruct, qwen2.5-3b-instruct, qwen2.5-1.5b-instruct, qwen2.5-0.5b-instruct.
   * 
   * @example
   * qwen3-8b
   */
  splitterModel?: string;
  /**
   * @remarks
   * The name of the separator. Valid values:
   * 
   * *   **ChineseRecursiveTextSplitter**: Inherits from RecursiveCharacterTextSplitter and, by default, uses the delimiters` ["\\n\\n","\\n", "。 |! |?", "\\.\\s|\\! \\s|\\?\\s", ";|;\\s", ",|,\\s"]  `, employing regular expressions to match text.
   * *   **RecursiveCharacterTextSplitter**: Uses the delimiters `["\\n\\n", "\\n", " ", ""]` by default. The splitter supports splitting code in languages such as C++, Go, Java, JS, PHP, Proto, Python, RST, Ruby, Rust, Scala, Swift, Markdown, LaTeX, HTML, Sol, and C Sharp.
   * *   **SpacyTextSplitter**: Uses the delimiters `\\n\\n` by default and leverages the spaCy en_core_web_sm model. The splitter can achieve better text splitting performance.
   * *   **MarkdownHeaderTextSplitter**: Splits text in the [("#", "head1"), ("##", "head2"), ("###", "head3"), ("####", "head4") format. This splitter works well with Markdown text.
   * *   **LLMSplitter**: Use LLM to split text. The default model is qwen3-8b. Currently, this splitter works only when ADBPGLoader is selected.
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
   * 
   * *   For complex documents with confusing typesetting and formatting, we recommend that you enable VL-enhanced content recognition.
   * 
   * *   Document processing time is longer after VL-enhanced content recognition is enabled.
   * 
   * *   After VL-enhanced content recognition is enabled, images in documents cannot be stored or recalled.
   * 
   * @example
   * false
   */
  vlEnhance?: boolean;
  /**
   * @remarks
   * Specifies whether to enable title enhancement.
   * 
   * >  You can determine the title text, mark the text in the metadata, and then combine the text with the upper-level title to implement text enhancement.
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

