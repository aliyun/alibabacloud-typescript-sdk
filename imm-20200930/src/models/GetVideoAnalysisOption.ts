// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the chapter-based summary of the video.
   * 
   * @example
   * false
   */
  chapterSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve keywords.
   * 
   * @example
   * false
   */
  keyword?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the PPT from the video. Default value: false.
   * 
   * @example
   * false
   */
  PPT?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the generated questions and corresponding answers.
   * 
   * @example
   * false
   */
  question?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the full-text summary.
   * 
   * @example
   * false
   */
  summary?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the dialogue in the video. Default value: false.
   * 
   * @example
   * false
   */
  transcript?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the segmented summary generated from the dialogue in the video. Default value: false.
   * 
   * @example
   * false
   */
  transcriptChapterSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to retrieve the summary generated from the dialogue in the video. Default value: false.
   * 
   * @example
   * false
   */
  transcriptSummary?: boolean;
  static names(): { [key: string]: string } {
    return {
      chapterSummary: 'ChapterSummary',
      keyword: 'Keyword',
      PPT: 'PPT',
      question: 'Question',
      summary: 'Summary',
      transcript: 'Transcript',
      transcriptChapterSummary: 'TranscriptChapterSummary',
      transcriptSummary: 'TranscriptSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chapterSummary: 'boolean',
      keyword: 'boolean',
      PPT: 'boolean',
      question: 'boolean',
      summary: 'boolean',
      transcript: 'boolean',
      transcriptChapterSummary: 'boolean',
      transcriptSummary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

