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
   * The name of the document loader. You do not need to specify this parameter. A document loader is automatically specified based on the file extension. Valid values:
   * 
   * *   UnstructuredHTMLLoader: `.html`
   * *   UnstructuredMarkdownLoader: `.md`
   * *   PyMuPDFLoader: `.pdf`
   * *   PyPDFLoader: `.pdf`
   * *   RapidOCRPDFLoader: `.pdf`
   * *   PDFWithImageRefLoader: `.pdf` (with the text-image association feature)
   * *   JSONLoader: `.json`
   * *   CSVLoader: `.csv`
   * *   RapidOCRLoader: `.png`, `.jpg`, `.jpeg`, and `.bmp`
   * *   UnstructuredFileLoader: `.eml`, `.msg`, `.rst`, `.txt`, `.docx`, `.epub`, `.odt`, `.pptx`, and `.tsv`
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
   * The file name of the document.
   * 
   * > 
   * 
   * *   We recommend that you add an extension to the file name. Examples: `.json`, `.md`, and `.pdf`. If you do not add an extension, the default loader designed for unstructured data is used.
   * 
   * *   If an image file is involved, the file name must contain an extension. The following extensions are supported: `.bmp`, `.jpg`, `.jpeg`, `.png`, and `.tiff`.
   * 
   * *   You can use a compressed package to upload images. The package file name must contain an extension. Supported package file extensions: `.tar`, `.gz`, and `.zip`.
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
   * The name of the splitter. Valid values:
   * 
   * *   **ChineseRecursiveTextSplitter**: inherits from RecursiveCharacterTextSplitter, uses `["\\n\\n","\\n", "。|!|?", "\\.\\s|\\!\\s|\\?\\s", ";|;\\s", ",|,\\s"]` as separators by default, and uses regular expressions to match text.
   * *   **RecursiveCharacterTextSplitter**: uses `["\\n\\n", "\\n", " ", ""]` as separators by default. The splitter supports splitting code in languages such as `C++, Go, Java, JS, PHP, Proto, Python, RST, Ruby, Rust, Scala, Swift, Markdown, LaTeX, HTML, Sol, and C Sharp`.
   * *   **SpacyTextSplitter**: uses `\\n\\n` as separators by default and uses the en_core_web_sm model of spaCy. The splitter can obtain better splitting effect.
   * *   **MarkdownHeaderTextSplitter**: splits text in the `[("#", "head1"), ("##", "head2"), ("###", "head3"), ("####", "head4")]` format. The splitter is suitable for Markdown text.
   * 
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitterName?: string;
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

