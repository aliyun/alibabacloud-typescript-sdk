// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListAiDataAsrInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  clipId?: string;
  /**
   * @remarks
   * The text content.
   */
  content?: string;
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The timestamp of the clip.
   * 
   * @example
   * 1.4
   */
  timestamp?: number;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 2.5
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      from: 'From',
      timestamp: 'Timestamp',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      from: 'number',
      timestamp: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

