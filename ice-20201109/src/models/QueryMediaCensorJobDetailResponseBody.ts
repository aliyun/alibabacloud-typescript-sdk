// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **spam**: spam.
   * *   **ad**: ads.
   * *   **abuse**: abuse content.
   * *   **flood**: excessive junk content.
   * *   **contraband**: prohibited content.
   * *   **meaningless**: meaningless content.
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
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result.
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **sexy**: sexy content.
   *     *   **porn**: pornographic content.
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **bloody**: bloody content.
   *     *   **explosion**: explosion and smoke.
   *     *   **outfit**: special costume.
   *     *   **logo**: special logo.
   *     *   **weapon**: weapon.
   *     *   **politics**: political content.
   *     *   **violence**: violence.
   *     *   **crowd**: crowd.
   *     *   **parade**: parade.
   *     *   **carcrash**: car accident.
   *     *   **flag**: flag.
   *     *   **location**: landmark.
   *     *   **others**: other content.
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **ad**: other ads.
   *     *   **politics**: political content in text.
   *     *   **porn**: pornographic content in text.
   *     *   **abuse**: abuse in text.
   *     *   **terrorism**: terrorist content in text.
   *     *   **contraband**: prohibited content in text.
   *     *   **spam**: spam in text.
   *     *   **npx**: illegal ad.
   *     *   **qrcode**: QR code.
   *     *   **programCode**: mini program code.
   * 
   * *   Valid values in the undesirable scene moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **meaningless**: meaningless content, such as a black or white screen.
   *     *   **PIP**: picture-in-picture.
   *     *   **smoking**: smoking.
   *     *   **drivelive**: live broadcasting in a running vehicle.
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **TV**: controlled logo.
   *     *   **trademark**: trademark.
   * 
   * @example
   * Normal
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
   * *   **porn**: pornographic content moderation.
   * *   **terrorism**: terrorist content moderation.
   * *   **ad**: ad moderation.
   * *   **live**: undesirable scene moderation.
   * *   **logo**: logo moderation.
   * 
   * @example
   * Antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults extends $dara.Model {
  result?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResultsResult },
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket in which the thumbnail is stored.
   * 
   * @example
   * bucket-out-test-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the thumbnail resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) object that is used as the thumbnail.
   * 
   * @example
   * test/ai/censor/v2/vme-****.jpg
   */
  object?: string;
  /**
   * @remarks
   * The moderation results.
   */
  results?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults;
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
      results: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResultResults,
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults extends $dara.Model {
  coverImageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult[];
  static names(): { [key: string]: string } {
    return {
      coverImageCensorResult: 'CoverImageCensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImageCensorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResultsCoverImageCensorResult },
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **spam**: spam.
   * *   **ad**: ads.
   * *   **abuse**: abuse content.
   * *   **flood**: excessive junk content.
   * *   **contraband**: prohibited content.
   * *   **meaningless**: meaningless content.
   * 
   * @example
   * terrorism
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
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput extends $dara.Model {
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result. Valid values:
   * 
   * *   **normal**: normal content.
   * *   **spam**: spam.
   * *   **ad**: ads.
   * *   **abuse**: abuse content.
   * *   **flood**: excessive junk content.
   * *   **contraband**: prohibited content.
   * *   **meaningless**: meaningless content.
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
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result.
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **sexy**: sexy content.
   *     *   **porn**: pornographic content.
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **bloody**: bloody content.
   *     *   **explosion**: explosion and smoke.
   *     *   **outfit**: special costume.
   *     *   **logo**: special logo.
   *     *   **weapon**: weapon.
   *     *   **politics**: political content.
   *     *   **violence**: violence.
   *     *   **crowd**: crowd.
   *     *   **parade**: parade.
   *     *   **carcrash**: car accident.
   *     *   **flag**: flag.
   *     *   **location**: landmark.
   *     *   **others**: other content.
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **ad**: other ads.
   *     *   **politics**: political content in text.
   *     *   **porn**: pornographic content in text.
   *     *   **abuse**: abuse in text.
   *     *   **terrorism**: terrorist content in text.
   *     *   **contraband**: prohibited content in text.
   *     *   **spam**: spam in text.
   *     *   **npx**: illegal ad.
   *     *   **qrcode**: QR code.
   *     *   **programCode**: mini program code.
   * 
   * *   Valid values in the undesirable scene moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **meaningless**: meaningless content, such as a black or white screen.
   *     *   **PIP**: picture-in-picture.
   *     *   **smoking**: smoking.
   *     *   **drivelive**: live broadcasting in a running vehicle.
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **TV**: controlled logo.
   *     *   **trademark**: trademark.
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
   * *   **porn**: pornographic content moderation.
   * *   **terrorism**: terrorist content moderation.
   * *   **ad**: ad moderation.
   * *   **live**: undesirable scene moderation.
   * *   **logo**: logo moderation.
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
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults extends $dara.Model {
  censorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResultsCensorResult },
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult extends $dara.Model {
  /**
   * @remarks
   * The label of the moderation result.
   * 
   * *   Valid values in the pornographic content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **sexy**: sexy content.
   *     *   **porn**: pornographic content.
   * 
   * *   Valid values in the terrorist content moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **bloody**: bloody content.
   *     *   **explosion**: explosion and smoke.
   *     *   **outfit**: special costume.
   *     *   **logo**: special logo.
   *     *   **weapon**: weapon.
   *     *   **politics**: political content.
   *     *   **violence**: violence.
   *     *   **crowd**: crowd.
   *     *   **parade**: parade.
   *     *   **carcrash**: car accident.
   *     *   **flag**: flag.
   *     *   **location**: landmark.
   *     *   **others**: other content.
   * 
   * *   Valid values in the ad moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **ad**: other ads.
   *     *   **politics**: political content in text.
   *     *   **porn**: pornographic content in text.
   *     *   **abuse**: abuse in text.
   *     *   **terrorism**: terrorist content in text.
   *     *   **contraband**: prohibited content in text.
   *     *   **spam**: spam in text.
   *     *   **npx**: illegal ad.
   *     *   **qrcode**: QR code.
   *     *   **programCode**: mini program code.
   * 
   * *   Valid values in the undesirable scene moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **meaningless**: meaningless content, such as a black or white screen.
   *     *   **PIP**: picture-in-picture.
   *     *   **smoking**: smoking.
   *     *   **drivelive**: live broadcasting in a running vehicle.
   * 
   * *   Valid values in the logo moderation scenario:
   * 
   *     *   **normal**: normal content.
   *     *   **TV**: controlled logo.
   *     *   **trademark**: trademark.
   * 
   * @example
   * flood
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
   * *   **porn**: pornographic content moderation.
   * *   **terrorism**: terrorist content moderation.
   * *   **ad**: ad moderation.
   * *   **live**: undesirable scene moderation.
   * *   **logo**: logo moderation.
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults extends $dara.Model {
  censorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult[];
  static names(): { [key: string]: string } {
    return {
      censorResult: 'CensorResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResult: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResultsCensorResult },
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline extends $dara.Model {
  /**
   * @remarks
   * The moderation results that include information such as labels and scores.
   */
  censorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults;
  /**
   * @remarks
   * The OSS object that is generated as the output snapshot.
   * 
   * >  In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg`, `output00002-****.jpg`, and so on.
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
      censorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimelineCensorResults,
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines extends $dara.Model {
  videoTimeline?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline[];
  static names(): { [key: string]: string } {
    return {
      videoTimeline: 'VideoTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoTimeline: { 'type': 'array', 'itemType': QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelinesVideoTimeline },
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult extends $dara.Model {
  /**
   * @remarks
   * A collection of moderation results. The information includes the summary about various scenarios such as pornographic content moderation and terrorist content moderation.
   */
  censorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ea04afcca7cd4e80b9ece8fbb251****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The moderation results that are sorted in ascending order by time.
   */
  videoTimelines?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines;
  static names(): { [key: string]: string } {
    return {
      censorResults: 'CensorResults',
      nextPageToken: 'NextPageToken',
      videoTimelines: 'VideoTimelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      censorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultCensorResults,
      nextPageToken: 'string',
      videoTimelines: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResultVideoTimelines,
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket in which the output snapshot is stored.
   * 
   * @example
   * test-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the output snapshot resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The OSS object that is generated as the output snapshot.
   * 
   * >  In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg`, `output00002-****.jpg`, and so on.
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig extends $dara.Model {
  /**
   * @remarks
   * The custom business type. Default value: common.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * The information about output snapshots.
   */
  outputFile?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile;
  /**
   * @remarks
   * Indicates whether the video content needs to be moderated. Default value: **true**. Valid values:
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
      outputFile: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile,
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

export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail extends $dara.Model {
  /**
   * @remarks
   * The moderation results of live comments.
   */
  barrageCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult;
  /**
   * @remarks
   * The error code returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.ResourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The moderation results of thumbnails.
   */
  coverImageCensorResults?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults;
  /**
   * @remarks
   * The time when the content moderation job was created.
   * 
   * @example
   * 2018-09-13T16:32:24Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The moderation results of descriptions.
   */
  descCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult;
  /**
   * @remarks
   * The time when the content moderation job was complete.
   * 
   * @example
   * 2018-09-13T16:38:24Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The information about the job input.
   */
  input?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput;
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
   * The error message returned if the job failed. This parameter is not returned if the job is successful.
   * 
   * @example
   * The resource operated cannot be found
   */
  message?: string;
  /**
   * @remarks
   * The ID of the ApsaraVideo Media Processing (MPS) queue to which the job was submitted.
   * 
   * @example
   * c5b30b7c0d0e4a0abde1d5f9e751****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Success
   */
  state?: string;
  /**
   * @remarks
   * The overall result of the content moderation job. Valid values:
   * 
   * *   **pass**: The content passes the moderation.
   * *   **review**: The content needs to be manually reviewed.
   * *   **block**: The content needs to be blocked.
   * 
   * >  If the moderation result of any type of content is review, the overall result is review. If the moderation result of any type of content is block, the overall result is block.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The moderation results of titles.
   */
  titleCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * example userdata ****
   */
  userData?: string;
  /**
   * @remarks
   * The moderation results of videos.
   */
  vensorCensorResult?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult;
  /**
   * @remarks
   * The video moderation configurations.
   */
  videoCensorConfig?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig;
  static names(): { [key: string]: string } {
    return {
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
      barrageCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailBarrageCensorResult,
      code: 'string',
      coverImageCensorResults: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailCoverImageCensorResults,
      creationTime: 'string',
      descCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailDescCensorResult,
      finishTime: 'string',
      input: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailInput,
      jobId: 'string',
      message: 'string',
      pipelineId: 'string',
      state: 'string',
      suggestion: 'string',
      titleCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailTitleCensorResult,
      userData: 'string',
      vensorCensorResult: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVensorCensorResult,
      videoCensorConfig: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig,
    };
  }

  validate() {
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

export class QueryMediaCensorJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the content moderation job.
   */
  mediaCensorJobDetail?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B42299E6-F71F-465F-8FE9-4FC2E3D3C2CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaCensorJobDetail: 'MediaCensorJobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaCensorJobDetail: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaCensorJobDetail && typeof (this.mediaCensorJobDetail as any).validate === 'function') {
      (this.mediaCensorJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

