// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * The review result category. Valid values:
   * 
   * - **normal**: Normal.
   * - **spam**: Spam content.
   * - **ad**: Ad.
   * - **politics**: Political content.
   * - **terrorism**: Terrorist content.
   * - **abuse**: Abuse.
   * - **porn**: Pornographic content.
   * - **flood**: Flooding.
   * - **contraband**: Contraband.
   * - **meaningless**: Meaningless.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The review scene. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The result score.
   * 
   * @example
   * 99.91
   */
  score?: string;
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult extends $dara.Model {
  /**
   * @remarks
   * The review result category.
   * 
   * When the scene is **porn**, valid values:
   * 
   * - **porn**: Pornographic.
   * - **sexy**: Sexy.
   * - **normal**: Normal.
   * 
   * When the scene is **terrorism**, valid values:
   * 
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special outfit.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Political content.
   * - **violence**: Violence.
   * - **crowd**: Crowd.
   * - **parade**: Parade.
   * - **carcrash**: Car crash.
   * - **flag**: Flag.
   * - **location**: Landmark.
   * - **others**: Others.
   * 
   * When the scene is **ad**, valid values:
   * 
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Nuisance ad.
   * - **qrcode**: QR code included.
   * - **programCode**: Mini program code included.
   * 
   * When the scene is **live**, valid values:
   * - **normal**: Normal.
   * - **meaningless**: No content in the image, such as a black or white screen.
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: Smoking.
   * - **drivelive**: In-car live streaming.
   * 
   * When the scene is **logo**, valid values:
   * - **normal**: Normal.
   * - **TV**: Regulated logo included.
   * - **trademark**: Trademark included.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The review scene. Valid values:
   * 
   * - **porn**: Pornography detection.
   * - **terrorism**: Terrorist and political content detection.
   * - **ad**: Image and text violation detection.
   * - **live**: Undesirable scene detection.
   * - **logo**: Image logo detection.
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image that hits the label. Valid values: `[0, 100]`. The score indicates the probability that the image belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 0
   */
  score?: string;
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult extends $dara.Model {
  /**
   * @remarks
   * The image review result category. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violation.
   * - **live**: Undesirable scene.
   * - **logo**: Image logo.
   * - **normal**: Normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The image review result details.
   */
  result?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult[];
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
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
      result: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult extends $dara.Model {
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * Test
   */
  content?: string;
  /**
   * @remarks
   * The review result category. Valid values:
   * - **spam**: Spam content.
   * - **ad**: Ad.
   * - **abuse**: Abuse.
   * - **flood**: Flooding.
   * - **contraband**: Contraband.
   * - **meaningless**: Meaningless.
   * - **normal**: Normal.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The review scene. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image that hits the label. Valid values: `[0, 100]`. The score indicates the probability that the image belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The ad review result category. Valid values:
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Nuisance ad.
   * - **qrcode**: QR code included.
   * - **programCode**: Mini program code included.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList extends $dara.Model {
  /**
   * @remarks
   * The ad review result category. Valid values:
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Nuisance ad.
   * - **qrcode**: QR code included.
   * - **programCode**: Mini program code included.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label.
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
   * 500
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult extends $dara.Model {
  /**
   * @remarks
   * The average score of the ad review result.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review results and the number of video snapshots for each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The ad review result category. Valid values:
   * - **normal**: Normal.
   * - **ad**: Other ads.
   * - **politics**: Text containing political content.
   * - **porn**: Text containing pornographic content.
   * - **abuse**: Text containing abusive content.
   * - **terrorism**: Text containing terrorist content.
   * - **contraband**: Text containing contraband content.
   * - **spam**: Text containing other spam content.
   * - **npx**: Nuisance ad.
   * - **qrcode**: QR code included.
   * - **programCode**: Mini program code included.
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The highest review score.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the hit label.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video frames that correspond to the label.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultTopList extends $dara.Model {
  /**
   * @remarks
   * The moderation category.
   */
  label?: string;
  /**
   * @remarks
   * The confidence score of the video snapshot that hits the label.
   */
  score?: string;
  /**
   * @remarks
   * The position of the video snapshot in the video.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResult extends $dara.Model {
  /**
   * @remarks
   * The average confidence score of the hit frames. This parameter is not returned if no frames are hit.
   */
  averageScore?: string;
  /**
   * @remarks
   * The aggregated count of violation labels, including Label (the Green label) and Count (the number of frames that hit the label).
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultCounterList[];
  /**
   * @remarks
   * The union of hit Green native labels, separated by commas, such as pornographic_adultContent_tii. If no labels are hit, the value is normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The highest confidence score of the hit frames. This parameter is not returned if no frames are hit.
   */
  maxScore?: string;
  /**
   * @remarks
   * The image moderation conclusion, which is mapped from frameResult.riskLevel: high to block, medium or low to review, and none to pass.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The details of the hit frames, sorted in descending order of confidence score.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The moderation category. Valid values:
   * - **normal**: normal
   * - **meaningless**: the image contains no content, such as a black or white screen
   * - **PIP**: Picture-in-Picture (PiP)
   * - **smoking**: smoking
   * - **drivelive**: live streaming inside a vehicle
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList extends $dara.Model {
  /**
   * @remarks
   * The moderation category. Valid values:
   * - **normal**: normal
   * - **meaningless**: the image contains no content, such as a black or white screen
   * - **PIP**: Picture-in-Picture (PiP)
   * - **smoking**: smoking
   * - **drivelive**: live streaming inside a vehicle
   * 
   * @example
   * smoking
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label.
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
   * 500
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult extends $dara.Model {
  /**
   * @remarks
   * The average score of the moderation result.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The moderation categories and the number of video snapshots for each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList[];
  /**
   * @remarks
   * The moderation category. Valid values:
   * - **normal**: normal
   * - **meaningless**: the image contains no content, such as a black or white screen
   * - **PIP**: Picture-in-Picture (PiP)
   * - **smoking**: smoking
   * - **drivelive**: live streaming inside a vehicle
   * 
   * @example
   * smoking
   */
  label?: string;
  /**
   * @remarks
   * The highest review score.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The moderation suggestion. Valid values:
   * - **block**: The content violates regulations.
   * - **review**: The content is suspected of violating regulations.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the hit label.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList extends $dara.Model {
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
   * The logo moderation category. Valid values:
   * - **normal**: normal
   * - **TV**: the image contains a regulated logo
   * - **trademark**: the image contains a trademark
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList extends $dara.Model {
  /**
   * @remarks
   * The logo moderation category. Valid values:
   * - **normal**: normal
   * - **TV**: the image contains a regulated logo
   * - **trademark**: the image contains a trademark
   * 
   * @example
   * TV
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label.
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
   * 5000
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult extends $dara.Model {
  /**
   * @remarks
   * The average score of the video snapshots that hit the label.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The moderation categories and the number of video snapshots for each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList[];
  /**
   * @remarks
   * The logo moderation category. Valid values:
   * - **normal**: normal
   * - **TV**: the image contains a regulated logo
   * - **trademark**: the image contains a trademark
   * 
   * @example
   * TV
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The logo moderation suggestion. Valid values:
   * - **block**: The content violates regulations.
   * - **review**: The content is suspected of violating regulations.
   * - **pass**: The content passes the moderation.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the hit label.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: Pornographic.
   * - **sexy**: Sexy.
   * - **normal**: Normal.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList extends $dara.Model {
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: Pornographic.
   * - **sexy**: Sexy.
   * - **normal**: Normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult extends $dara.Model {
  /**
   * @remarks
   * The average score of the video snapshots that hit the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review results and the number of video snapshots for each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: Pornographic.
   * - **sexy**: Sexy.
   * - **normal**: Normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The pornography detection suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the hit label.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of video snapshots.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The terrorist and political content review result. Valid values:
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special outfit.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Political content.
   * - **violence**: Violence.
   * - **crowd**: Crowd.
   * - **parade**: Parade.
   * - **carcrash**: Car crash.
   * - **flag**: Flag.
   * - **location**: Landmark.
   * - **others**: Others.
   * 
   * @example
   * terrorism
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList extends $dara.Model {
  /**
   * @remarks
   * The terrorist and political content review result. Valid values:
   * 
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special outfit.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Political content.
   * - **violence**: Violence.
   * - **crowd**: Crowd.
   * - **parade**: Parade.
   * - **carcrash**: Car crash.
   * - **flag**: Flag.
   * - **location**: Landmark.
   * - **others**: Others.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
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
   * 5
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the video snapshot.
   * 
   * @example
   * http://ali*****.com/aivideocensor/yytysursrutyrxuq/****.jpg
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult extends $dara.Model {
  /**
   * @remarks
   * The average score of the video snapshots that hit the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the terrorist and political content review results and the number of video snapshots for each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The terrorist and political content review result. Valid values:
   * 
   * - **normal**: Normal.
   * - **bloody**: Bloody.
   * - **explosion**: Explosion and smoke.
   * - **outfit**: Special outfit.
   * - **logo**: Special logo.
   * - **weapon**: Weapon.
   * - **politics**: Political content.
   * - **violence**: Violence.
   * - **crowd**: Crowd.
   * - **parade**: Parade.
   * - **carcrash**: Car crash.
   * - **flag**: Flag.
   * - **location**: Landmark.
   * - **others**: Others.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label. Valid values: `[0, 100]`. The precision is 10 decimal places. The score indicates the probability that the snapshot belongs to the corresponding label category. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The terrorist and political content review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores for the hit label.
   */
  topList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList[];
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
      counterList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList },
      label: 'string',
      maxScore: 'string',
      suggestion: 'string',
      topList: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultTopList },
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult extends $dara.Model {
  /**
   * @remarks
   * The ad review result.
   */
  adResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult;
  /**
   * @remarks
   * The GreenEnhanced moderation result.
   */
  greenEnhancedResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResult;
  /**
   * @remarks
   * The review result category. Valid values:
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violation.
   * - **live**: Undesirable scene.
   * - **logo**: Image logo.
   * - **normal**: Normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The harmful content moderation result.
   */
  liveResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult;
  /**
   * @remarks
   * The logo moderation result.
   */
  logoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult;
  /**
   * @remarks
   * The pornography detection result.
   */
  pornResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult;
  /**
   * @remarks
   * The video review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The terrorist and political content review result.
   */
  terrorismResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult;
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
      adResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult,
      greenEnhancedResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultGreenEnhancedResult,
      label: 'string',
      liveResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult,
      logoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult,
      pornResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult,
      suggestion: 'string',
      terrorismResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult,
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJobData extends $dara.Model {
  /**
   * @remarks
   * The reviewed content that contains violations. Multiple values are separated by commas (,). Valid values:
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
   * The audio review result.
   */
  audioResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult[];
  /**
   * @remarks
   * The image review result.
   */
  imageResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult[];
  /**
   * @remarks
   * The review result category. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: Pornographic content.
   * - **terrorism**: Terrorist and political content.
   * - **ad**: Image and text violation.
   * - **live**: Undesirable scene.
   * - **logo**: Image logo.
   * - **audio**: Audio anti-spam.
   * - **normal**: Normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The review suggestion. Valid values:
   * 
   * - **block**: Violation.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text review result.
   */
  textResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult[];
  /**
   * @remarks
   * The video review result.
   */
  videoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult;
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
      audioResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult },
      label: 'string',
      suggestion: 'string',
      textResult: { 'type': 'array', 'itemType': GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult },
      videoResult: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResult,
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

export class GetAIMediaAuditJobResponseBodyMediaAuditJob extends $dara.Model {
  /**
   * @remarks
   * The job error code. Check this field when the job status is fail.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The end time of the job. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The start time of the job. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The job result data.
   */
  data?: GetAIMediaAuditJobResponseBodyMediaAuditJobData;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * bdbc266af6894*****943a70176d92e9
   */
  jobId?: string;
  /**
   * @remarks
   * The video ID.
   * 
   * @example
   * fe028d09441d*****d1afffb138cd7e
   */
  mediaId?: string;
  /**
   * @remarks
   * The job error message. Check this field when the job status is fail.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **success**: Succeeded.
   * - **fail**: Failed.
   * - **init**: Initialized.
   * - **processing**: Processing.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The job type. Currently, only automated review is supported.
   * 
   * @example
   * AIMediaAudit
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      data: 'Data',
      jobId: 'JobId',
      mediaId: 'MediaId',
      message: 'Message',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completeTime: 'string',
      creationTime: 'string',
      data: GetAIMediaAuditJobResponseBodyMediaAuditJobData,
      jobId: 'string',
      mediaId: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIMediaAuditJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The automated review job information.
   */
  mediaAuditJob?: GetAIMediaAuditJobResponseBodyMediaAuditJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EAA3E96A-02E2-41*****85-08E1D568ED3A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaAuditJob: 'MediaAuditJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaAuditJob: GetAIMediaAuditJobResponseBodyMediaAuditJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaAuditJob && typeof (this.mediaAuditJob as any).validate === 'function') {
      (this.mediaAuditJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

