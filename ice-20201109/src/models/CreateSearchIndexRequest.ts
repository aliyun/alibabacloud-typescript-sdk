// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchIndexRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  indexConfig?: string;
  /**
   * @example
   * Active
   */
  indexStatus?: string;
  /**
   * @remarks
   * The category of the index. Valid values:
   * 
   * *   mm: large visual model. You can use this model to describe complex visual features and identify and search for specific actions, movements, and events in videos, such as when athletes score a goal or get injured.
   * 
   * >  This feature is in the public preview phase. You can use this feature for free for 1,000 hours of videos.
   * 
   * *   face: face recognition. You can use the face recognition technology to describe face characteristics and automatically mark or search for faces in videos.
   * *   aiLabel: smart tagging. The smart tagging category is used to describe content such as subtitles and audio in videos. You can use the speech recognition technology to automatically extract, mark, and search for subtitles and dialog content from videos. This helps you quickly locate the video content that is related to specific topics or keywords.
   * 
   * This parameter is required.
   * 
   * @example
   * mm
   */
  indexType?: string;
  /**
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

