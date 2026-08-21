// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultResponseBodyMediaAuditResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The review result category. Valid values:
   * 
   * - **normal**: normal.
   * - **spam**: spam.
   * - **ad**: advertisement.
   * - **politics**: politically sensitive content.
   * - **terrorism**: terrorist content.
   * - **abuse**: abusive content.
   * - **porn**: pornographic content.
   * - **flood**: junk content.
   * - **contraband**: prohibited content.
   * - **meaningless**: meaningless content.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The review scenario. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The score of the audio that hits the label. Value range: `[0, 100]`. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 99.91
   */
  score?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult extends $dara.Model {
  /**
   * @remarks
   * The review result category.
   * 
   * When scene is **porn**, valid values:
   * 
   * - **porn**: pornographic.
   * - **sexy**: suggestive.
   * - **normal**: normal.
   * 
   * When scene is **terrorism**, valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive.
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
   * - **meaningless**: no content in the image (such as a black or white screen).
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
   * The review scenario. Valid values:
   * 
   * - **porn**: pornography detection.
   * - **terrorism**: terrorist or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: image logo.
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
   * 100.00000
   */
  score?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The image review result categories. Multiple values are separated by commas (,). Valid values:
   * 
   * - **porn**: pornographic content.
   * - **terrorism**: terrorist or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: image logo.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The details of the image review result.
   */
  result?: GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult[];
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The image category. Valid values: **cover** (thumbnail).
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
   * The reviewed text content.
   * 
   * @example
   * Hotline 123****
   */
  content?: string;
  /**
   * @remarks
   * The review result category. Valid values:
   * 
   * - **spam**: spam.
   * - **ad**: advertisement.
   * - **abuse**: abusive content.
   * - **flood**: junk content.
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
   * The review scenario. Fixed value: **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The score of the text that hits the label. Value range: `[0, 100]`. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100.00000
   */
  score?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The advertisement review result category. Valid values:
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultTopList extends $dara.Model {
  /**
   * @remarks
   * The advertisement review result category. Valid values:
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
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review result and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The advertisement review result category. Valid values:
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
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The review result category. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as a black or white screen).
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList extends $dara.Model {
  /**
   * @remarks
   * The review result category. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as a black or white screen).
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
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the undesirable content review result and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList[];
  /**
   * @remarks
   * The review result category. Valid values:
   * - **normal**: normal.
   * - **meaningless**: no content in the image (such as a black or white screen).
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
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The logo review result category. Valid values:
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList extends $dara.Model {
  /**
   * @remarks
   * The logo review result category. Valid values:
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
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review result and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList[];
  /**
   * @remarks
   * The logo review result category. Valid values:
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
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The pornography detection result. Valid values:
   * 
   * - **porn**: pornographic.
   * - **sexy**: suggestive.
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultTopList extends $dara.Model {
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: pornographic.
   * - **sexy**: suggestive.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the review result and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The pornography detection result. Valid values:
   * 
   * - **porn**: pornographic.
   * - **sexy**: suggestive.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The number of video snapshots that contain terrorism or politically sensitive content.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The terrorism and politically sensitive content review result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive.
   * - **violence**: violence.
   * - **crowd**: crowd gathering.
   * - **parade**: parade.
   * - **carcrash**: car crash scene.
   * - **flag**: flag.
   * - **location**: landmark.
   * - **others**: others.
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
   * The terrorism and politically sensitive content review result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive.
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
   * The score of the video snapshot that hits the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
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
   * The average score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of the terrorism and politically sensitive content review result and the number of video snapshots for each category.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The terrorism and politically sensitive content review result. Valid values:
   * 
   * - **normal**: normal.
   * - **bloody**: bloody.
   * - **explosion**: explosion or smoke.
   * - **outfit**: special outfit.
   * - **logo**: special logo.
   * - **weapon**: weapon.
   * - **politics**: politically sensitive.
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
   * The highest score of the video snapshots that hit the label. Value range: `[0, 100]`, with a precision of 10 decimal places. The score indicates the probability of the corresponding label. A higher score indicates higher accuracy.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The terrorism and politically sensitive content review suggestion. Valid values:
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
   * The information about the video snapshots with the highest scores that hit the label.
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
   * The advertisement review result.
   */
  adResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult;
  /**
   * @remarks
   * The review result category. Valid values:
   * - **porn**: pornographic content.
   * - **terrorism**: terrorist or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: image logo.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The undesirable content review result.
   */
  liveResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult;
  /**
   * @remarks
   * The logo review result.
   */
  logoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult;
  /**
   * @remarks
   * The pornography detection result.
   */
  pornResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
   * The terrorism and politically sensitive content review result.
   */
  terrorismResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResult;
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
      adResult: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult,
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
   * The content that violates the review rules. Multiple values are separated by commas (,). Valid values:
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
   * The audio review result.
   */
  audioResult?: GetMediaAuditResultResponseBodyMediaAuditResultAudioResult[];
  /**
   * @remarks
   * The image review result.
   */
  imageResult?: GetMediaAuditResultResponseBodyMediaAuditResultImageResult[];
  /**
   * @remarks
   * The review result categories. Multiple values are separated by commas (,). Valid values:
   * - **porn**: pornographic content.
   * - **terrorism**: terrorist or politically sensitive content.
   * - **ad**: image or text violation.
   * - **live**: undesirable scene.
   * - **logo**: image logo.
   * - **audio**: audio anti-spam.
   * - **normal**: normal.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The review result suggestion. Valid values:
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
  textResult?: GetMediaAuditResultResponseBodyMediaAuditResultTextResult[];
  /**
   * @remarks
   * The video review result.
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
   * The review result.
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

