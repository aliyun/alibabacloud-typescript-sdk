// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * URL of the split file, valid for 2 hours. The file format is JSONL, with each line formatted as `{"page_content":"*****", "metadata": {"**":"***","**":"***"}`.
   * 
   * @example
   * http://oss.xxx/music_chunk.jsonl
   */
  chunkFileUrl?: string;
  /**
   * @remarks
   * Number of documents after splitting.
   * 
   * @example
   * 100
   */
  docsCount?: number;
  /**
   * @remarks
   * Name of the document loader.
   * 
   * @example
   * RapidOCRPDFLoader
   */
  documentLoader?: string;
  /**
   * @remarks
   * File extension.
   * 
   * @example
   * txt
   */
  fileExt?: string;
  /**
   * @remarks
   * MD5 value of the file.
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
   * File name.
   * 
   * @example
   * music.txt
   */
  fileName?: string;
  /**
   * @remarks
   * File size, in bytes.
   * 
   * @example
   * 10000
   */
  fileSize?: number;
  /**
   * @remarks
   * Download URL of the document, valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/music.txt
   */
  fileUrl?: string;
  /**
   * @remarks
   * Document version. This value increments by 1 each time the same document is updated and uploaded.
   * 
   * @example
   * 1
   */
  fileVersion?: number;
  /**
   * @remarks
   * Detailed information returned by the API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Download URL for the plain text (without metadata) after splitting, each line is a chunk, valid for 2 hours.
   * 
   * @example
   * http://oss.xxx/music_plain_chunk.txt
   */
  plainChunkFileUrl?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Source of the document.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * API execution status, with values as follows:
   * - **success**: Execution succeeded.
   * - **fail**: Execution failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Name of the text splitter.
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

