// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL of the chunked file. The URL is valid for 2 hours. The file is in JSONL format, and each line is in the following format: {"page_content":"*****", "metadata": {"**":"***","**":"***"}
   * 
   * @example
   * http://oss.xxx/music_chunk.jsonl
   */
  chunkFileUrl?: string;
  /**
   * @remarks
   * The number of chunks generated from the document.
   * 
   * @example
   * 100
   */
  docsCount?: number;
  /**
   * @remarks
   * The name of the document loader.
   * 
   * @example
   * RapidOCRPDFLoader
   */
  documentLoader?: string;
  /**
   * @remarks
   * The URL of the Markdown result file parsed by ADBPGLoader. The URL is valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/adbpg_loader_result.md
   */
  documentLoaderResultFileUrl?: string;
  /**
   * @remarks
   * The file name extension.
   * 
   * @example
   * txt
   */
  fileExt?: string;
  /**
   * @remarks
   * The MD5 hash of the file.
   * 
   * @example
   * b8078c9591413550f8963e37e24abcea
   */
  fileMd5?: string;
  /**
   * @remarks
   * The last modified time of the document.
   * 
   * @example
   * 2023-11-01 10:01:01.123456
   */
  fileMtime?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * music.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @remarks
   * The download URL of the document. The URL is valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/music.txt
   */
  fileUrl?: string;
  /**
   * @remarks
   * The document version. This value is incremented by 1 each time the same document is updated and uploaded.
   * 
   * @example
   * 1
   */
  fileVersion?: number;
  /**
   * @remarks
   * The detailed information returned by the API operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The download URL of the plain text chunks without metadata. Each line represents a chunk. The URL is valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/music_plain_chunk.txt
   */
  plainChunkFileUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The source of the document.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The execution status of the API operation. Valid values:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the text splitter.
   * 
   * @example
   * ChineseRecursiveTextSplitter
   */
  textSplitter?: string;
  static names(): { [key: string]: string } {
    return {
      chunkFileUrl: 'ChunkFileUrl',
      docsCount: 'DocsCount',
      documentLoader: 'DocumentLoader',
      documentLoaderResultFileUrl: 'DocumentLoaderResultFileUrl',
      fileExt: 'FileExt',
      fileMd5: 'FileMd5',
      fileMtime: 'FileMtime',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileUrl: 'FileUrl',
      fileVersion: 'FileVersion',
      message: 'Message',
      plainChunkFileUrl: 'PlainChunkFileUrl',
      requestId: 'RequestId',
      source: 'Source',
      status: 'Status',
      textSplitter: 'TextSplitter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkFileUrl: 'string',
      docsCount: 'number',
      documentLoader: 'string',
      documentLoaderResultFileUrl: 'string',
      fileExt: 'string',
      fileMd5: 'string',
      fileMtime: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileUrl: 'string',
      fileVersion: 'number',
      message: 'string',
      plainChunkFileUrl: 'string',
      requestId: 'string',
      source: 'string',
      status: 'string',
      textSplitter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

