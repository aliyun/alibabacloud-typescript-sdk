// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult extends $dara.Model {
  label?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,). Valid values:
   * 
   * *   **spam**: spam
   * *   **ad**: ads
   * *   **abuse**: abuse
   * *   **flood**: excessive junk content
   * *   **contraband**: prohibited content
   * *   **meaningless**: meaningless content
   * *   **normal**: normal content
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,).
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **sexy**: sexy content
   *     *   **porn**: pornographic content
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **bloody**: bloody content
   *     *   **explosion**: explosion and smoke
   *     *   **outfit**: special costume
   *     *   **logo**: special logo
   *     *   **weapon**: weapon
   *     *   **politics**: political content
   *     *   **violence**: violence
   *     *   **crowd**: crowd
   *     *   **parade**: parade
   *     *   **carcrash**: car accident
   *     *   **flag**: flag
   *     *   **location**: landmark
   *     *   **others**: other content
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **ad**: other ads
   *     *   **politics**: political content in text
   *     *   **porn**: pornographic content in text
   *     *   **abuse**: abuse in text
   *     *   **terrorism**: terrorist content in text
   *     *   **contraband**: prohibited content in text
   *     *   **spam**: spam in text
   *     *   **npx**: illegal ads
   *     *   **qrcode**: QR code
   *     *   **programCode**: mini program code
   * 
   * *   Valid values in the live moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **meaningless**: meaningless content, such as a black or white screen
   *     *   **PIP**: picture-in-picture
   *     *   **smoking**: smoking
   *     *   **drivelive**: live broadcasting in a running vehicle
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **TV**: controlled TV station logo
   *     *   **trademark**: trademark
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn**: pornographic content moderation
   * *   **terrorism**: terrorist content moderation
   * *   **ad**: ad violation moderation
   * *   **live**: undesirable scene moderation
   * *   **logo**: special logo moderation
   * 
   * @example
   * live
   */
  scene?: string;
  /**
   * @remarks
   * The overall result of the job. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * > If the moderation result of any type of the moderated content is review, the overall result is review. If the moderation result of any type of the moderated content is block, the overall result is block.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults extends $dara.Model {
  result?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResultsResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the video thumbnail.
   * 
   * @example
   * example-Bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the video thumbnail resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) object that is used as the video thumbnail.
   * 
   * @example
   * test/ai/censor/v2/vme-****.jpg
   */
  object?: string;
  /**
   * @remarks
   * The moderation results of the content moderation jobs.
   */
  results?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      results: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults,
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults extends $dara.Model {
  coverImageCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult[];
  static names(): { [key: string]: string } {
    return {
      coverImageCensorResult: 'CoverImageCensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageCensorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult },
    };
  }

  validate() {
    if(Array.isArray(this.coverImageCensorResult)) {
      $dara.Model.validateArray(this.coverImageCensorResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,). Valid values:
   * 
   * *   **spam**: spam
   * *   **ad**: ads
   * *   **abuse**: abuse
   * *   **flood**: excessive junk content
   * *   **contraband**: prohibited content
   * *   **meaningless**: meaningless content
   * *   **normal**: normal content
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * bucket-test-in-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input file resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
   * 
   * @example
   * test/ai/censor/test-****.mp4
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,).
   * 
   * *   **normal**: normal content
   * *   **spam**: spam
   * *   **ad**: ads
   * *   **abuse**: abuse content
   * *   **flood**: excessive junk content
   * *   **contraband**: prohibited content
   * *   **meaningless**: meaningless content
   * 
   * @example
   * meaningless
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,).
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **porn**: pornographic content
   *     *   **sexy**: sexy content
   *     *   **normal**: normal content
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **bloody**: bloody content
   *     *   **explosion**: explosion and smoke
   *     *   **outfit**: special costume
   *     *   **logo**: special logo
   *     *   **weapon**: weapon
   *     *   **politics**: political content
   *     *   **violence**: violence
   *     *   **crowd**: crowd
   *     *   **parade**: parade
   *     *   **carcrash**: car accident
   *     *   **flag**: flag
   *     *   **location**: landmark
   *     *   **others**: other content
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **ad**: other ads
   *     *   **politics**: political content in text
   *     *   **porn**: pornographic content in text
   *     *   **abuse**: abuse in text
   *     *   **terrorism**: terrorist content in text
   *     *   **contraband**: prohibited content in text
   *     *   **spam**: spam in text
   *     *   **npx**: illegal ads
   *     *   **qrcode**: QR code
   *     *   **programCode**: mini program code
   * 
   * *   Valid values in the live moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **meaningless**: meaningless content, such as a black or white screen
   *     *   **PIP**: picture-in-picture
   *     *   **smoking**: smoking
   *     *   **drivelive**: live broadcasting in a running vehicle
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **TV**: controlled TV station logo
   *     *   **trademark**: trademark
   * 
   * @example
   * meaningless
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn**: pornographic content moderation
   * *   **terrorism**: terrorist content moderation
   * *   **ad**: ad violation moderation
   * *   **live**: undesirable scene moderation
   * *   **logo**: special logo moderation
   * 
   * @example
   * terrorism
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * review
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults extends $dara.Model {
  censorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResultsCensorResult },
    };
  }

  validate() {
    if(Array.isArray(this.censorResult)) {
      $dara.Model.validateArray(this.censorResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult extends $dara.Model {
  /**
   * @remarks
   * The labels of the moderation result. Separate multiple labels with commas (,). Valid values:
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **porn**: pornographic content
   *     *   **sexy**: sexy content
   *     *   **normal**: normal content
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **bloody**: bloody content
   *     *   **explosion**: explosion and smoke
   *     *   **outfit**: special costume
   *     *   **logo**: special logo
   *     *   **weapon**: weapon
   *     *   **politics**: political content
   *     *   **violence**: violence
   *     *   **crowd**: crowd
   *     *   **parade**: parade
   *     *   **carcrash**: car accident
   *     *   **flag**: flag
   *     *   **location**: landmark
   *     *   **others**: other content
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **ad**: other ads
   *     *   **politics**: political content in text
   *     *   **porn**: pornographic content in text
   *     *   **abuse**: abuse in text
   *     *   **terrorism**: terrorist content in text
   *     *   **contraband**: prohibited content in text
   *     *   **spam**: spam in text
   *     *   **npx**: illegal ads
   *     *   **qrcode**: QR code
   *     *   **programCode**: mini program code
   * 
   * *   Valid values in the live moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **meaningless**: meaningless content, such as a black or white screen
   *     *   **PIP**: picture-in-picture
   *     *   **smoking**: smoking
   *     *   **drivelive**: live broadcasting in a running vehicle
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content
   *     *   **TV**: controlled TV station logo
   *     *   **trademark**: trademark
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.99
   */
  rate?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * *   **porn**: pornographic content moderation
   * *   **terrorism**: terrorist content moderation
   * *   **ad**: ad violation moderation
   * *   **live**: undesirable scene moderation
   * *   **logo**: special logo moderation
   * 
   * @example
   * pron
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      rate: 'Rate',
      scene: 'Scene',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      rate: 'string',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults extends $dara.Model {
  censorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult },
    };
  }

  validate() {
    if(Array.isArray(this.censorResult)) {
      $dara.Model.validateArray(this.censorResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline extends $dara.Model {
  /**
   * @remarks
   * The moderation results that include information such as labels and scores.
   */
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults;
  /**
   * @remarks
   * The OSS object that is generated as the output snapshot.
   * 
   * > In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg, output00002-****.jpg`, and so on.
   * 
   * @example
   * output{Count}.jpg
   */
  object?: string;
  /**
   * @remarks
   * The position in the video. Format: `hh:mm:ss[.SSS]`.
   * 
   * @example
   * 00:02:59.999
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      object: 'Object',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimelineCensorResults,
      object: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.censorResults && typeof (this.censorResults as any).validate === 'function') {
      (this.censorResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines extends $dara.Model {
  videoTimeline?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelinesVideoTimeline },
    };
  }

  validate() {
    if(Array.isArray(this.videoTimeline)) {
      $dara.Model.validateArray(this.videoTimeline);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult extends $dara.Model {
  /**
   * @remarks
   * A collection of the moderation results. The information includes the summary about various scenarios such as pornographic content and terrorist content.
   */
  censorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ea04afcca7cd4e80b9ece8fbb251****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The moderation results that are sorted in ascending order by time.
   */
  videoTimelines?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResultVideoTimelines,
    };
  }

  validate() {
    if(this.censorResults && typeof (this.censorResults as any).validate === 'function') {
      (this.censorResults as any).validate();
    }
    if(this.videoTimelines && typeof (this.videoTimelines as any).validate === 'function') {
      (this.videoTimelines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the output snapshot.
   * 
   * @example
   * test-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the OSS bucket for storing the output snapshot resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The one or more OSS objects that are generated as the output snapshots.
   * 
   * > In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg, output00002-****.jpg`, and so on.
   * 
   * @example
   * output{Count}.jpg
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig extends $dara.Model {
  /**
   * @remarks
   * The moderation template. Default value: common. The default value indicates that the default template is used.
   * 
   * > If the moderation template is not specified, the default value common is returned. If a custom moderation template that is created by submitting a ticket is specified, a user ID is returned.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * The information about output snapshots.
   */
  outputFile?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile;
  /**
   * @remarks
   * Indicates whether the video content needs to be moderated. Default value: true. Valid values:
   * 
   * *   **true**: The video content needs to be moderated.
   * *   **false**: The video content does not need to be moderated.
   * 
   * @example
   * true
   */
  videoCensor?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      outputFile: 'OutputFile',
      videoCensor: 'VideoCensor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      outputFile: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile,
      videoCensor: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob extends $dara.Model {
  audioCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult;
  /**
   * @remarks
   * The moderation result of live comments.
   */
  barrageCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult;
  /**
   * @remarks
   * The error code returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The moderation results of thumbnails.
   */
  coverImageCensorResults?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-11-04T07:25:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The moderation result of the description.
   */
  descCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult;
  /**
   * @remarks
   * The time when the job was completed.
   * 
   * @example
   * 2021-11-04T07:25:48Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput;
  /**
   * @remarks
   * The ID of the content moderation job.
   * 
   * @example
   * f8f166eea7a44e9bb0a4aecf9543****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue that is used to run the job.
   * 
   * @example
   * c5b30b7c0d0e4a0abde1d5f9e751****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed again.
   * *   **block**: The content needs to be blocked.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The moderation result of the title.
   */
  titleCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * example userdata ****
   */
  userData?: string;
  /**
   * @remarks
   * The moderation results of the video.
   */
  vensorCensorResult?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult;
  /**
   * @remarks
   * The video moderation configurations.
   */
  videoCensorConfig?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
      audioCensorResult: 'AudioCensorResult',
      barrageCensorResult: 'BarrageCensorResult',
      code: 'Code',
      coverImageCensorResults: 'CoverImageCensorResults',
      creationTime: 'CreationTime',
      descCensorResult: 'DescCensorResult',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      message: 'Message',
      pipelineId: 'PipelineId',
      state: 'State',
      suggestion: 'Suggestion',
      titleCensorResult: 'TitleCensorResult',
      userData: 'UserData',
      vensorCensorResult: 'VensorCensorResult',
      videoCensorConfig: 'VideoCensorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobAudioCensorResult,
      barrageCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig,
    };
  }

  validate() {
    if(this.audioCensorResult && typeof (this.audioCensorResult as any).validate === 'function') {
      (this.audioCensorResult as any).validate();
    }
    if(this.barrageCensorResult && typeof (this.barrageCensorResult as any).validate === 'function') {
      (this.barrageCensorResult as any).validate();
    }
    if(this.coverImageCensorResults && typeof (this.coverImageCensorResults as any).validate === 'function') {
      (this.coverImageCensorResults as any).validate();
    }
    if(this.descCensorResult && typeof (this.descCensorResult as any).validate === 'function') {
      (this.descCensorResult as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.titleCensorResult && typeof (this.titleCensorResult as any).validate === 'function') {
      (this.titleCensorResult as any).validate();
    }
    if(this.vensorCensorResult && typeof (this.vensorCensorResult as any).validate === 'function') {
      (this.vensorCensorResult as any).validate();
    }
    if(this.videoCensorConfig && typeof (this.videoCensorConfig as any).validate === 'function') {
      (this.videoCensorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyMediaCensorJobList extends $dara.Model {
  mediaCensorJob?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob[];
  static names(): { [key: string]: string } {
    return {
      mediaCensorJob: 'MediaCensorJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJob: { 'type': 'array', 'itemType': QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJob },
    };
  }

  validate() {
    if(Array.isArray(this.mediaCensorJob)) {
      $dara.Model.validateArray(this.mediaCensorJob);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBodyNonExistIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaCensorJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content moderation jobs.
   */
  mediaCensorJobList?: QueryMediaCensorJobListResponseBodyMediaCensorJobList;
  /**
   * @remarks
   * The token that is used to retrieve the next page of the query results. The value is a UUID that contains 32 characters. If the returned query results cannot be displayed within one page, this parameter is returned. The value of this parameter is updated for each query.
   * 
   * @example
   * 9b1a42bc6e8d46e6a1383b7e7f01****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The IDs of the jobs that do not exist. This parameter is not returned if all specified jobs are found.
   */
  nonExistIds?: QueryMediaCensorJobListResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1D5C080-8E2F-5030-8AB4-13092F17631B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobList: 'MediaCensorJobList',
      nextPageToken: 'NextPageToken',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobList: QueryMediaCensorJobListResponseBodyMediaCensorJobList,
      nextPageToken: 'string',
      nonExistIds: QueryMediaCensorJobListResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaCensorJobList && typeof (this.mediaCensorJobList as any).validate === 'function') {
      (this.mediaCensorJobList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

