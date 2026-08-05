// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition extends $dara.Model {
  /**
   * @remarks
   * The height of the bounding box, in pixels.
   * 
   * @example
   * 168
   */
  h?: number;
  /**
   * @remarks
   * The width of the bounding box, in pixels.
   * 
   * @example
   * 128
   */
  w?: number;
  /**
   * @remarks
   * The x-axis coordinate of the upper-left vertex, in pixels.
   * 
   * @example
   * 517
   */
  x?: number;
  /**
   * @remarks
   * The y-axis coordinate of the upper-left vertex, in pixels.
   * 
   * @example
   * 409
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData extends $dara.Model {
  /**
   * @remarks
   * The face coordinate information.
   */
  boxPosition?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition;
  /**
   * @remarks
   * The timestamp when the face appears in the media asset, in seconds. The value is of the Float type.
   * 
   * @example
   * 62.03302
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      boxPosition: 'BoxPosition',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxPosition: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackDataBoxPosition,
      timestamp: 'number',
    };
  }

  validate() {
    if(this.boxPosition && typeof (this.boxPosition as any).validate === 'function') {
      (this.boxPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos extends $dara.Model {
  /**
   * @remarks
   * The end time of the matched clip, in seconds. The value is of the Float type.
   * 
   * @example
   * 69.06635
   */
  endTime?: number;
  /**
   * @remarks
   * The facial expression.
   * 
   * @example
   * Calm
   */
  expression?: string;
  /**
   * @remarks
   * The start time of the matched clip, in seconds. The value is of the Float type.
   * 
   * @example
   * 61.066353
   */
  startTime?: number;
  /**
   * @remarks
   * The detailed information of the face in the clip.
   */
  trackData?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      expression: 'Expression',
      startTime: 'StartTime',
      trackData: 'TrackData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      expression: 'string',
      startTime: 'number',
      trackData: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfosTrackData },
    };
  }

  validate() {
    if(Array.isArray(this.trackData)) {
      $dara.Model.validateArray(this.trackData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaClipByFaceResponseBodyMediaClipList extends $dara.Model {
  /**
   * @remarks
   * The person type. Valid values:
   * 
   * - celebrity: celebrity.
   * - sensitive: sensitive person.
   * - politician: political figure.
   * - custom: custom person.
   * - unknown: unknown person.
   * 
   * @example
   * celebrity
   */
  category?: string;
  /**
   * @remarks
   * The entity ID, which corresponds to the entity ID in the label analysis results.
   * 
   * @example
   * 1031025****
   */
  entityId?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * John Doe
   */
  labelName?: string;
  /**
   * @remarks
   * The clustering information of person clips.
   */
  occurrencesInfos?: SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos[];
  /**
   * @remarks
   * The score of the matched clip. The value is of the Float type and ranges from 0 to 1.
   * 
   * @example
   * 0.99041677
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      entityId: 'EntityId',
      labelName: 'LabelName',
      occurrencesInfos: 'OccurrencesInfos',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      entityId: 'string',
      labelName: 'string',
      occurrencesInfos: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipListOccurrencesInfos },
      score: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.occurrencesInfos)) {
      $dara.Model.validateArray(this.occurrencesInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaClipByFaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The collection of media asset clips that meet the requirements.
   */
  mediaClipList?: SearchMediaClipByFaceResponseBodyMediaClipList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E44FFACD-9E90-555A-A09A-6FD3B7335E39
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of media asset clips that meet the conditions.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaClipList: 'MediaClipList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaClipList: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaClipList)) {
      $dara.Model.validateArray(this.mediaClipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

