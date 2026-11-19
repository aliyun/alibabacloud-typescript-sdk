// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultResponseBodyMediaAuditResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * 
   * - **normal**: Normal content.
   * - **spam**: Spam.
   * - **ad**: Ads.
   * - **politics**: Political content.
   * - **terrorism**: Terrorist content.
   * - **abuse**: Abuse.
   * - **porn**: Pornographic content.
   * - **flood**: Flooding.
   * - **contraband**: Contraband.
   * - **meaningless**: Meaningless content.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The moderation scenario. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the audio. Valid values: `[0, 100]`. The score indicates the probability that the audio belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 99.91
   */
  score?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult extends $dara.Model {
  /**
   * @remarks
   * The category of the moderation result.
   * 
   * When the scene is **porn**, valid values are:
   * 
   * - **porn**: Pornographic content.
   * - **sexy**: Sexy content.
   * - **normal**: Normal content.
   * 
   * When the scene is **terrorism**, valid values are:
   * 
   * - **normal**: Normal content.
   * - **bloody**: Bloody content.
   * - **explosion**: Explosions and smoke.
   * - **outfit**: Special outfits.
   * - **logo**: Special logos.
   * - **weapon**: Weapons.
   * - **politics**: Political content.
   * - **violence**: Violence.
   * - **crowd**: Crowds.
   * - **parade**: Parades.
   * - **carcrash**: Car crashes.
   * - **flag**: Flags.
   * - **location**: Landmarks.
   * - **others**: Others.
   * 
   * When the scene is **ad**, valid values are:
   * 
   * - **normal**: Normal content.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Intrusive ads.
   * - **qrcode**: QR codes.
   * - **programCode**: Mini program codes.
   * 
   * When the scene is **live**, valid values are:
   * - **normal**: Normal content.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: Live streaming in a car.
   * 
   * When the scene is **logo**, valid values are:
   * - **normal**: Normal content.
   * - **TV**: Regulated logos.
   * - **trademark**: Trademarks.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The moderation scenario. Valid values:
   * 
   * - **porn**: Pornography detection.
   * - **terrorism**: Terrorist and political content detection.
   * - **ad**: Image and text violation detection.
   * - **live**: Inappropriate scene detection.
   * - **logo**: Image logo detection.
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the image. Valid values: `[0, 100]`. The score indicates the probability that the image belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.00000
   */
  score?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      scene: 'string',
      score: 'string',
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The category of the image moderation result. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violations.
   * - **live**: Inappropriate scenes.
   * - **logo**: Image logos.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The details of the image moderation result.
   */
  result?: GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult[];
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The image category. Valid value: **cover** (thumbnail).
   * 
   * @example
   * cover
   */
  type?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * http://www.test.com/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      result: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult },
      suggestion: 'string',
      type: 'string',
      url: 'string',
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

export class GetMediaAuditResultResponseBodyMediaAuditResultTextResult extends $dara.Model {
  /**
   * @remarks
   * The moderated text content.
   * 
   * @example
   * Hotline 123****
   */
  content?: string;
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * 
   * - **spam**: Spam.
   * - **ad**: Ads.
   * - **abuse**: Abuse.
   * - **flood**: Flooding.
   * - **contraband**: Contraband.
   * - **meaningless**: Meaningless content.
   * - **normal**: Normal content.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The moderation scenario. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the text snapshot. Valid values: `[0, 100]`. The score indicates the probability that the text belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.00000
   */
  score?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text categorization. Valid value: **title** (title).
   * 
   * @example
   * title
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      label: 'Label',
      scene: 'Scene',
      score: 'Score',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      label: 'string',
      scene: 'string',
      score: 'string',
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The category of the ad moderation result. Valid values:
   * - **normal**: Normal content.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Intrusive ads.
   * - **qrcode**: QR codes.
   * - **programCode**: Mini program codes.
   * 
   * @example
   * ad
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList extends $dara.Model {
  /**
   * @remarks
   * The category of the ad moderation result. Valid values:
   * - **normal**: Normal content.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Intrusive ads.
   * - **qrcode**: QR codes.
   * - **programCode**: Mini program codes.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the video snapshot. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of video snapshots for each category in the moderation result.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The category of the ad moderation result. Valid values:
   * - **normal**: Normal content.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Intrusive ads.
   * - **qrcode**: QR codes.
   * - **programCode**: Mini program codes.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the matched label.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots for the corresponding label.
   */
  count?: number;
  /**
   * @remarks
   * The moderation result label.
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultTopList extends $dara.Model {
  /**
   * @remarks
   * The moderation result category.
   */
  label?: string;
  /**
   * @remarks
   * The confidence score of the video snapshot that matches the label.
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the video snapshot in the video.
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score of the matched frames. This parameter is not returned if no frames are matched.
   */
  averageScore?: string;
  /**
   * @remarks
   * The aggregation of violation label counts, including Label for the Green label and Count for the number of matched frames for the label.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultCounterList[];
  /**
   * @remarks
   * The union of matched native Green labels, separated by commas, such as pornographic_adultContent_tii. If no labels are matched, the value is normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score of the matched frames. This parameter is not returned if no frames are matched.
   */
  maxScore?: string;
  /**
   * @remarks
   * The image moderation conclusion, which is mapped from frameResult.riskLevel: high is mapped to block, medium or low is mapped to review, and none is mapped to pass.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The details of the matched frames, sorted in descending order of confidence score.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * - **normal**: Normal content.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: Live streaming in a car.
   * 
   * @example
   * smoking
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList extends $dara.Model {
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * - **normal**: Normal content.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: Live streaming in a car.
   * 
   * @example
   * smoking
   */
  label?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the video snapshot. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of video snapshots for each inappropriate content category in the moderation result.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList[];
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * - **normal**: Normal content.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: Live streaming in a car.
   * 
   * @example
   * smoking
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the matched label.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The category of the logo moderation result. Valid values:
   * - **normal**: Normal content.
   * - **TV**: Regulated logos.
   * - **trademark**: Trademarks.
   * 
   * @example
   * TV
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList extends $dara.Model {
  /**
   * @remarks
   * The category of the logo moderation result. Valid values:
   * - **normal**: Normal content.
   * - **TV**: Regulated logos.
   * - **trademark**: Trademarks.
   * 
   * @example
   * TV
   */
  label?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the video snapshot. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 16
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of video snapshots for each category in the moderation result.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList[];
  /**
   * @remarks
   * The category of the logo moderation result. Valid values:
   * - **normal**: Normal content.
   * - **TV**: Regulated logos.
   * - **trademark**: Trademarks.
   * 
   * @example
   * TV
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the matched label.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The pornography moderation result. Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **sexy**: Sexy content.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList extends $dara.Model {
  /**
   * @remarks
   * The pornography moderation result. Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **sexy**: Sexy content.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the video snapshot. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.0000
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of video snapshots for each category in the moderation result.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The pornography moderation result. Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **sexy**: Sexy content.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The pornography moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the matched label.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots for the terrorism and political content moderation result.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The moderation label for terrorism and political content. Valid values:
   * - **normal**: The content is normal.
   * - **bloody**: The content contains bloody scenes.
   * - **explosion**: The content contains explosions and smoke.
   * - **outfit**: The content contains special outfits.
   * - **logo**: The content contains special logos.
   * - **weapon**: The content contains weapons.
   * - **politics**: The content contains political elements.
   * - **violence**: The content contains violence.
   * - **crowd**: The content contains crowd gatherings.
   * - **parade**: The content contains parades.
   * - **carcrash**: The content contains car crash scenes.
   * - **flag**: The content contains flags.
   * - **location**: The content contains landmarks.
   * - **others**: The content contains other elements.
   * 
   * @example
   * outfit
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList extends $dara.Model {
  /**
   * @remarks
   * The moderation label for terrorism and political content. Valid values:
   * - **normal**: The content is normal.
   * - **bloody**: The content contains bloody scenes.
   * - **explosion**: The content contains explosions and smoke.
   * - **outfit**: The content contains special outfits.
   * - **logo**: The content contains special logos.
   * - **weapon**: The content contains weapons.
   * - **politics**: The content contains political elements.
   * - **violence**: The content contains violence.
   * - **crowd**: The content contains crowd gatherings.
   * - **parade**: The content contains parades.
   * - **carcrash**: The content contains car crash scenes.
   * - **flag**: The content contains flags.
   * - **location**: The content contains landmarks.
   * - **others**: The content contains other elements.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The confidence score for the matched label in the video snapshot. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.000
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://temp-testbucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      score: 'Score',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      score: 'string',
      timestamp: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of terrorism and political content moderation results and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The moderation label for terrorism and political content. Valid values:
   * - **normal**: The content is normal.
   * - **bloody**: The content contains bloody scenes.
   * - **explosion**: The content contains explosions and smoke.
   * - **outfit**: The content contains special outfits.
   * - **logo**: The content contains special logos.
   * - **weapon**: The content contains weapons.
   * - **politics**: The content contains political elements.
   * - **violence**: The content contains violence.
   * - **crowd**: The content contains crowd gatherings.
   * - **parade**: The content contains parades.
   * - **carcrash**: The content contains car crash scenes.
   * - **flag**: The content contains flags.
   * - **location**: The content contains landmarks.
   * - **others**: The content contains other elements.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The maximum confidence score for the matched label in the video snapshots. Valid values: `[0, 100]`. The score is accurate to 10 decimal places. The score indicates the probability that the video snapshot belongs to the corresponding category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The moderation suggestion for terrorism and political content. Valid values:
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the matched label.
   */
  topList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList[];
  static names(): { [key: string]: string } {
    return {
      averageScore: 'AverageScore',
      counterList: 'CounterList',
      label: 'Label',
      maxScore: 'MaxScore',
      suggestion: 'Suggestion',
      topList: 'TopList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageScore: 'string',
      counterList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultTopList },
    };
  }

  validate() {
    if(Array.isArray(this.counterList)) {
      $dara.Model.validateArray(this.counterList);
    }
    if(Array.isArray(this.topList)) {
      $dara.Model.validateArray(this.topList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResult extends $dara.Model {
  /**
   * @remarks
   * The ad moderation result.
   */
  adResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult;
  /**
   * @remarks
   * The GreenEnhanced moderation result.
   */
  greenEnhancedResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResult;
  /**
   * @remarks
   * The category of the moderation result. Valid values:
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violations.
   * - **live**: Inappropriate scenes.
   * - **logo**: Image logos.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The inappropriate content moderation result.
   */
  liveResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult;
  /**
   * @remarks
   * The logo moderation result.
   */
  logoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult;
  /**
   * @remarks
   * The pornography moderation result.
   */
  pornResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The moderation result for terrorism and political content.
   */
  terrorismResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      adResult: 'AdResult',
      greenEnhancedResult: 'GreenEnhancedResult',
      label: 'Label',
      liveResult: 'LiveResult',
      logoResult: 'LogoResult',
      pornResult: 'PornResult',
      suggestion: 'Suggestion',
      terrorismResult: 'TerrorismResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult,
      greenEnhancedResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultGreenEnhancedResult,
      label: 'string',
      liveResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult,
      logoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult,
      pornResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult,
      suggestion: 'string',
      terrorismResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult,
    };
  }

  validate() {
    if(this.adResult && typeof (this.adResult as any).validate === 'function') {
      (this.adResult as any).validate();
    }
    if(this.greenEnhancedResult && typeof (this.greenEnhancedResult as any).validate === 'function') {
      (this.greenEnhancedResult as any).validate();
    }
    if(this.liveResult && typeof (this.liveResult as any).validate === 'function') {
      (this.liveResult as any).validate();
    }
    if(this.logoResult && typeof (this.logoResult as any).validate === 'function') {
      (this.logoResult as any).validate();
    }
    if(this.pornResult && typeof (this.pornResult as any).validate === 'function') {
      (this.pornResult as any).validate();
    }
    if(this.terrorismResult && typeof (this.terrorismResult as any).validate === 'function') {
      (this.terrorismResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBodyMediaAuditResult extends $dara.Model {
  /**
   * @remarks
   * The moderated content that contains violations. Multiple values are separated by commas (,). Valid values:
   * 
   * - **video**: Video.
   * - **image-cover**: Thumbnail.
   * - **text-title**: Title.
   * 
   * @example
   * video
   */
  abnormalModules?: string;
  /**
   * @remarks
   * The audio moderation result.
   */
  audioResult?: GetMediaAuditResultResponseBodyMediaAuditResultAudioResult[];
  /**
   * @remarks
   * The image moderation result.
   */
  imageResult?: GetMediaAuditResultResponseBodyMediaAuditResultImageResult[];
  /**
   * @remarks
   * The category of the moderation result. Multiple values are separated by commas (,). Valid values:
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violations.
   * - **live**: Inappropriate scenes.
   * - **logo**: Image logos.
   * - **audio**: Audio anti-spam.
   * - **normal**: Normal content.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * 
   * - **block**: The content is blocked.
   * - **review**: The content requires manual review.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text moderation result.
   */
  textResult?: GetMediaAuditResultResponseBodyMediaAuditResultTextResult[];
  /**
   * @remarks
   * The video moderation result.
   */
  videoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult;
  static names(): { [key: string]: string } {
    return {
      abnormalModules: 'AbnormalModules',
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      label: 'Label',
      suggestion: 'Suggestion',
      textResult: 'TextResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalModules: 'string',
      audioResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultImageResult },
      label: 'string',
      suggestion: 'string',
      textResult: { 'type': 'array', 'itemType': GetMediaAuditResultResponseBodyMediaAuditResultTextResult },
      videoResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResult,
    };
  }

  validate() {
    if(Array.isArray(this.audioResult)) {
      $dara.Model.validateArray(this.audioResult);
    }
    if(Array.isArray(this.imageResult)) {
      $dara.Model.validateArray(this.imageResult);
    }
    if(Array.isArray(this.textResult)) {
      $dara.Model.validateArray(this.textResult);
    }
    if(this.videoResult && typeof (this.videoResult as any).validate === 'function') {
      (this.videoResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaAuditResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The moderation result.
   */
  mediaAuditResult?: GetMediaAuditResultResponseBodyMediaAuditResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB7D7232-1AB2-40FE-B8D5-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditResult: 'MediaAuditResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditResult: GetMediaAuditResultResponseBodyMediaAuditResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaAuditResult && typeof (this.mediaAuditResult as any).validate === 'function') {
      (this.mediaAuditResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

