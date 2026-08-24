// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CreateDocParserJobAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name.
   */
  agentName?: string;
  /**
   * @remarks
   * The language type for speech recognition.
   */
  asrLanguage?: string;
  /**
   * @remarks
   * The audio clip output.
   */
  audioClipOutput?: boolean;
  /**
   * @remarks
   * The audio window duration in seconds.
   */
  audioWindowSeconds?: number;
  /**
   * @remarks
   * The chunk summary information.
   */
  chunkSummary?: boolean;
  /**
   * @remarks
   * The format of the input file. Valid values:
   * 
   * - **pdf**: PDF file.
   * 
   * - **docx**: Word file in docx format.
   * 
   * - **doc**: Word file in doc format.
   * 
   * - **pptx**: PPT file in pptx format.
   * 
   * - **ppt**: PPT file in ppt format.
   * 
   * - **txt**: Plain text file.
   * 
   * - **md**: Markdown file.
   * 
   * - **png**: PNG image.
   * 
   * - **jpg**: JPG image.
   * 
   * - **jpeg**: JPEG image.
   * 
   * This parameter is required.
   * 
   * @example
   * pdf
   */
  fileFormat?: string;
  /**
   * @remarks
   * The file name, which must include the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * document.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the file to be parsed.
   * >SDKs for various programming languages additionally provide a `CreateDocParserJobAdvance` method that supports passing a local file stream directly (such as Java InputStream), without the need to upload the file to OSS and construct a FileUrl in advance. When using the Advance method, replace the `FileUrl` parameter (URL string) with the `FileUrlObject` parameter (file stream). All other request parameters remain unchanged. The SDK automatically performs the following operations:
   * >1. Obtains temporary OSS upload credentials.
   * >2. Uploads the file stream directly to OSS.
   * >3. Calls the CreateDocParserJob operation using the generated OSS URL.
   * 
   * @example
   * https://xxx.oss-cn-beijing.aliyuncs.com/document.pdf?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * The frame output result.
   */
  frameOutput?: boolean;
  /**
   * @remarks
   * The global summary information.
   */
  globalSummary?: boolean;
  /**
   * @remarks
   * The image processing format.
   */
  imageMode?: string;
  /**
   * @remarks
   * The image understanding and analysis setting.
   */
  imageUnderstanding?: string;
  /**
   * @remarks
   * The media chunk interval in seconds.
   */
  mediaChunkIntervalSeconds?: number;
  /**
   * @remarks
   * The media chunk strategy.
   */
  mediaChunkStrategy?: string;
  /**
   * @remarks
   * The number of media frames per minute.
   */
  mediaFramesPerMinute?: number;
  /**
   * @remarks
   * The maximum frame budget for media.
   */
  mediaMaxFrameBudget?: number;
  /**
   * @remarks
   * The minimum frame budget for media.
   */
  mediaMinFrameBudget?: number;
  /**
   * @remarks
   * The OSS file URL.
   */
  ossFileUrl?: string;
  /**
   * @remarks
   * The output format of the parsing result. Valid values:
   * 
   * - **markdown**: Markdown format.
   * 
   * This parameter is required.
   * 
   * @example
   * markdown
   */
  outputFormat?: string;
  /**
   * @remarks
   * The parsing scene.
   */
  parseScene?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The response mode.
   */
  responseMode?: string;
  /**
   * @remarks
   * The result type.
   */
  resultType?: string;
  /**
   * @remarks
   * The table processing format.
   */
  tableFormat?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      asrLanguage: 'AsrLanguage',
      audioClipOutput: 'AudioClipOutput',
      audioWindowSeconds: 'AudioWindowSeconds',
      chunkSummary: 'ChunkSummary',
      fileFormat: 'FileFormat',
      fileName: 'FileName',
      fileUrlObject: 'FileUrl',
      frameOutput: 'FrameOutput',
      globalSummary: 'GlobalSummary',
      imageMode: 'ImageMode',
      imageUnderstanding: 'ImageUnderstanding',
      mediaChunkIntervalSeconds: 'MediaChunkIntervalSeconds',
      mediaChunkStrategy: 'MediaChunkStrategy',
      mediaFramesPerMinute: 'MediaFramesPerMinute',
      mediaMaxFrameBudget: 'MediaMaxFrameBudget',
      mediaMinFrameBudget: 'MediaMinFrameBudget',
      ossFileUrl: 'OssFileUrl',
      outputFormat: 'OutputFormat',
      parseScene: 'ParseScene',
      regionId: 'RegionId',
      responseMode: 'ResponseMode',
      resultType: 'ResultType',
      tableFormat: 'TableFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      asrLanguage: 'string',
      audioClipOutput: 'boolean',
      audioWindowSeconds: 'number',
      chunkSummary: 'boolean',
      fileFormat: 'string',
      fileName: 'string',
      fileUrlObject: 'Readable',
      frameOutput: 'boolean',
      globalSummary: 'boolean',
      imageMode: 'string',
      imageUnderstanding: 'string',
      mediaChunkIntervalSeconds: 'number',
      mediaChunkStrategy: 'string',
      mediaFramesPerMinute: 'number',
      mediaMaxFrameBudget: 'number',
      mediaMinFrameBudget: 'number',
      ossFileUrl: 'string',
      outputFormat: 'string',
      parseScene: 'string',
      regionId: 'string',
      responseMode: 'string',
      resultType: 'string',
      tableFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

