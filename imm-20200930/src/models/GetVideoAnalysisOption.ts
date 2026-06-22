// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisOption extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate a chapter summary for each segment of the video.
   */
  chapterSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to extract relevant keywords from the video.
   */
  keyword?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a presentation (PPT) file based on the video analysis.
   */
  PPT?: boolean;
  /**
   * @remarks
   * Specifies whether to generate potential questions about the video.
   */
  question?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a concise video summary.
   */
  summary?: boolean;
  /**
   * @remarks
   * Specifies whether to transcribe the spoken audio in the video to text.
   */
  transcript?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a chapter-based summary from the video transcript.
   */
  transcriptChapterSummary?: boolean;
  /**
   * @remarks
   * Specifies whether to generate a summary of the video transcript.
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

