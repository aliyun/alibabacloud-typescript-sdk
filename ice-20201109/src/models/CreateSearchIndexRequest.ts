// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The index configuration.
   * 
   * @example
   * {}
   */
  indexConfig?: string;
  /**
   * @remarks
   * The index status. Default value: Active. Valid values:
   * - Active: activated.
   * - Deactive: deactivated.
   * 
   * @example
   * Active
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index type. Valid values:
   * - mm: large model visual state. Used to describe complex visual features and actions in videos. This type helps identify and search for specific actions, movements, and events in videos, such as a soccer player scoring a goal or a basketball player getting injured.
   * > 
   * > The shared instance type supports up to 1,000 hours of video. After the limit is exceeded, the system no longer performs large model visual state analysis.
   * - face: automatic face recognition. Used to describe facial features in videos. Through face recognition technology, faces in videos can be automatically tagged and searched.
   * > 
   * > The shared instance type supports up to 1,000,000 face analyses. After the limit is exceeded, the system no longer performs face analysis.
   * - aiLabel: intelligent tagging. The intelligent tagging index type is used to describe subtitles, speech, and other content in videos. Through text and speech recognition technology, language information such as subtitles and dialogues in videos can be automatically extracted for tagging and searching. This helps users quickly search for and locate content related to specific topics or keywords in videos.
   * 
   * This parameter is required.
   * 
   * @example
   * mm
   */
  indexType?: string;
  /**
   * @remarks
   * The name of the search library.
   * 
   * - If you do not specify a search library name, the search index is created in the default IMS search library. Default value: ims-default-search-lib.
   * - You can call the [QuerySearchLib](https://help.aliyun.com/document_detail/2584455.html) operation to query information about existing search libraries.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      indexConfig: 'IndexConfig',
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexConfig: 'string',
      indexStatus: 'string',
      indexType: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

