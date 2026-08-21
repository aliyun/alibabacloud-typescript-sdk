// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * The category of the review result:
   * 
   * - **normal**: normal.
   * - **spam**: spam.
   * - **ad**: advertisement.
   * - **politics**: politically sensitive content.
   * - **terrorism**: terrorist content.
   * - **abuse**: abuse.
   * - **porn**: pornographic content.
   * - **flood**: flooding.
   * - **contraband**: prohibited content.
   * - **meaningless**: meaningless content.
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
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
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
   * The category of the review result.
   * 
   * When scene is **porn**, valid values:
   * 
   * - **porn**: pornographic content.
   * - **sexy**: sexy content.
   * - **normal**: normal.
   * 
   * When scene is **terrorism**, valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody content.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive content.
   * - **violence**: violence.
   * - **crowd**: crowd gathering.
   * - **parade**: parade.
   * - **carcrash**: car crash scene.
   * - **flag**: flag.
   * - **location**: landmark.
   * - **others**: others.
   * 
   * When scene is **ad**, valid values:
   * 
   * - **normal**: normal.
   * - **ad**: other advertisement.
   * - **politics**: text contains politically sensitive content.
   * - **porn**: text contains pornographic content.
   * - **abuse**: text contains abusive content.
   * - **terrorism**: text contains terrorist content.
   * - **contraband**: text contains prohibited content.
   * - **spam**: text contains other spam content.
   * - **npx**: psoriasis advertisement.
   * - **qrcode**: contains a QR code.
   * - **programCode**: contains a mini program code.
   * 
   * When scene is **live**, valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: smoking.
   * - **drivelive**: in-car live streaming.
   * 
   * When scene is **logo**, valid values:
   * - **normal**: normal.
   * - **TV**: contains a controlled logo.
   * - **trademark**: contains a trademark.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The review scene. Valid values:
   * 
   * - **porn**: pornography detection.
   * - **terrorism**: terrorist content or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: logo in image.
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image that hits the label. Value range: `[0, 100]`. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 0
   */
  score?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
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
   * The category of the image review result. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: pornography.
   * - **terrorism**: terrorist content or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: logo in image.
   * - **normal**: normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The details of the image review result.
   */
  result?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult[];
  /**
   * @remarks
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The image type. Valid values: **cover** (thumbnail).
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
   * The category of the review result. Valid values:
   * - **spam**: spam.
   * - **ad**: advertisement.
   * - **abuse**: abuse.
   * - **flood**: flooding.
   * - **contraband**: prohibited content.
   * - **meaningless**: meaningless content.
   * - **normal**: normal.
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
   * The score of the image that hits the label. Value range: `[0, 100]`. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text categorization. Valid values: **title** (title).
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
   * The category of the advertisement review result. Valid values:
   * - **normal**: normal.
   * - **ad**: other advertisement.
   * - **politics**: text contains politically sensitive content.
   * - **porn**: text contains pornographic content.
   * - **abuse**: text contains abusive content.
   * - **terrorism**: text contains terrorist content.
   * - **contraband**: text contains prohibited content.
   * - **spam**: text contains other spam content.
   * - **npx**: psoriasis advertisement.
   * - **qrcode**: contains a QR code.
   * - **programCode**: contains a mini program code.
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
   * The category of the advertisement review result. Valid values:
   * - **normal**: normal.
   * - **ad**: other advertisement.
   * - **politics**: text contains politically sensitive content.
   * - **porn**: text contains pornographic content.
   * - **abuse**: text contains abusive content.
   * - **terrorism**: text contains terrorist content.
   * - **contraband**: text contains prohibited content.
   * - **spam**: text contains other spam content.
   * - **npx**: psoriasis advertisement.
   * - **qrcode**: contains a QR code.
   * - **programCode**: contains a mini program code.
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
   * The average score of the advertisement review result.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The category of the advertisement review result. Valid values:
   * - **normal**: normal.
   * - **ad**: other advertisement.
   * - **politics**: text contains politically sensitive content.
   * - **porn**: text contains pornographic content.
   * - **abuse**: text contains abusive content.
   * - **terrorism**: text contains terrorist content.
   * - **contraband**: text contains prohibited content.
   * - **spam**: text contains other spam content.
   * - **npx**: psoriasis advertisement.
   * - **qrcode**: contains a QR code.
   * - **programCode**: contains a mini program code.
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
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The category of the review result. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: smoking.
   * - **drivelive**: in-car live streaming.
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
   * The category of the review result. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: smoking.
   * - **drivelive**: in-car live streaming.
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
   * The average score of the review result.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as black screen or white screen).
   * - **PIP**: Picture-in-Picture (PiP).
   * - **smoking**: smoking.
   * - **drivelive**: in-car live streaming.
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
   * The review result suggestion. Valid values:
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The category of the logo review result. Valid values:
   * - **normal**: normal.
   * - **TV**: contains a controlled logo.
   * - **trademark**: contains a trademark.
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
   * The category of the logo review result. Valid values:
   * - **normal**: normal.
   * - **TV**: contains a controlled logo.
   * - **trademark**: contains a trademark.
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
   * The categories of the review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResultCounterList[];
  /**
   * @remarks
   * The category of the logo review result. Valid values:
   * - **normal**: normal.
   * - **TV**: contains a controlled logo.
   * - **trademark**: contains a trademark.
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
   * The logo review suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores that hit the label.
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
   * - **porn**: pornographic content.
   * - **sexy**: sexy content.
   * - **normal**: normal.
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
   * - **porn**: pornographic content.
   * - **sexy**: sexy content.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: pornographic content.
   * - **sexy**: sexy content.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The pornography detection suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The terrorism and politically sensitive content review result. Valid values:
   * - **normal**: normal.
   * - **bloody**: bloody content.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive content.
   * - **violence**: violence.
   * - **crowd**: crowd gathering.
   * - **parade**: parade.
   * - **carcrash**: car crash scene.
   * - **flag**: flag.
   * - **location**: landmark.
   * - **others**: others.
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
   * The terrorism and politically sensitive content review result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody content.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive content.
   * - **violence**: violence.
   * - **crowd**: crowd gathering.
   * - **parade**: parade.
   * - **carcrash**: car crash scene.
   * - **flag**: flag.
   * - **location**: landmark.
   * - **others**: others.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the terrorism and politically sensitive content review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The terrorism and politically sensitive content review result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody content.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive content.
   * - **violence**: violence.
   * - **crowd**: crowd gathering.
   * - **parade**: parade.
   * - **carcrash**: car crash scene.
   * - **flag**: flag.
   * - **location**: landmark.
   * - **others**: others.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`. The value is accurate to 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The terrorism and politically sensitive content review suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The advertisement review result.
   */
  adResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * - **porn**: pornography.
   * - **terrorism**: terrorist content or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: logo in image.
   * - **normal**: normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The undesirable content review result.
   */
  liveResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult;
  /**
   * @remarks
   * The logo review result.
   */
  logoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult;
  /**
   * @remarks
   * The pornography detection result.
   */
  pornResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult;
  /**
   * @remarks
   * The video review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The terrorism and politically sensitive content review result.
   */
  terrorismResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResult;
  static names(): { [key: string]: string } {
    return {
      adResult: 'AdResult',
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
   * The content types that contain violations. Multiple values are separated by commas (,). Valid values:
   * 
   * - **video**: video.
   * - **image-cover**: thumbnail.
   * - **text-title**: title.
   * 
   * @example
   * video
   */
  abnormalModules?: string;
  /**
   * @remarks
   * The audio review results.
   */
  audioResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult[];
  /**
   * @remarks
   * The image review results.
   */
  imageResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult[];
  /**
   * @remarks
   * The category of the review result. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: pornography.
   * - **terrorism**: terrorist content or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: logo in image.
   * - **audio**: audio anti-spam.
   * - **normal**: normal.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
   * 
   * - **block**: Violation detected.
   * - **review**: Suspected violation.
   * - **pass**: Passed.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text review results.
   */
  textResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult[];
  /**
   * @remarks
   * The video review results.
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
   * The error code of the job. Check this field when Status is fail.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The time when the job ended. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job started. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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
   * The error message of the job. Check this field when Status is fail.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **success**: The job is successful.
   * - **fail**: The job failed.
   * - **init**: The job is being initialized.
   * - **processing**: The job is being processed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The job type. Only automated review is supported.
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
   * The information about the automated review job.
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

