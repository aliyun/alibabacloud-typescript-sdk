// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult extends $dara.Model {
  /**
   * @remarks
   * The category of the review result.
   * 
   * *   **normal**: normal content
   * *   **spam**: spam
   * *   **ad**: ads
   * *   **politics**: political content
   * *   **terrorism**: terrorist content
   * *   **abuse**: abuse
   * *   **porn**: pornographic content.
   * *   **flood**: excessive junk content
   * *   **contraband**: prohibited content
   * *   **meaningless**: meaningless content
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The review scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 99.91
   */
  score?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
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
   * Valid values if scene is **porn**:
   * 
   * *   **porn**
   * *   **sexy**
   * *   **normal**
   * 
   * Valid values if scene is **terrorism**:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
   * 
   * Valid values if scene is **ad**:
   * 
   * *   **normal**: normal content
   * *   **ad**: ads
   * *   **politics**: political content
   * *   **porn**: pornographic content
   * *   **abuse**: verbal abuse
   * *   **terrorism**: terrorist content
   * *   **contraband**: prohibited content
   * *   **spam**: spam content
   * *   **npx**: illegal ad
   * *   **qrcode**: QR code
   * *   **programCode**: mini program code
   * 
   * Valid values if scene is **live**:
   * 
   * *   **normal**: normal content
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture
   * *   **smoking**: smoking
   * *   **drivelive**: live broadcasting in a running vehicle
   * 
   * Valid values if scene is **logo**:
   * 
   * *   **normal**: normal content
   * *   **TV**: controlled TV station logo
   * *   **trademark**: trademark
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The review scenario. Valid values:
   * 
   * *   **porn**: pornographic content
   * *   **terrorism**: terrorist or politically sensitive content
   * *   **ad**: ad violation
   * *   **live**: undesirable scene
   * *   **logo**: logo
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label. Valid values: `[0, 100]`. The score is representative of the confidence.
   * 
   * @example
   * 0
   */
  score?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
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
   * The categories of the image review results. Multiple values are separated by commas (,). Valid values:
   * 
   * *   **porn**: pornographic content
   * *   **terrorism**: terrorist or politically sensitive content
   * *   **ad**: ad violation
   * *   **live**: undesirable scene
   * *   **logo**: logo
   * *   **normal**: normal content
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * Details of image review results.
   */
  result?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResultResult[];
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The type of the image. Valid value: **cover**.
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
   * 
   * *   **spam**: spam content
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
   * The review scenario. The value is **antispam**.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label. Valid values: `[0, 100]`. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The type of the text. The value is **title**.
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
   * The categories of the ad review results. Valid values:
   * 
   * *   **normal**: normal content
   * *   **ad**: other ads
   * *   **politics**: political content
   * *   **porn**: pornographic content
   * *   **abuse**: abuse
   * *   **terrorism**: terrorist content
   * *   **contraband**: prohibited content
   * *   **spam**: spam content
   * *   **npx**: illegal ad
   * *   **qrcode**: QR code
   * *   **programCode**: mini program code
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
   * The categories of the ad review results. Valid values:
   * 
   * *   **normal**: normal content
   * *   **ad**: other ads
   * *   **politics**: political content
   * *   **porn**: pornographic content
   * *   **abuse**: abuse
   * *   **terrorism**: terrorist content
   * *   **contraband**: prohibited content
   * *   **spam**: spam content
   * *   **npx**: illegal ad
   * *   **qrcode**: QR code
   * *   **programCode**: mini program code
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The score of the snapshot in the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * http://temp-****bucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of snapshots of each category in the review result.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The categories of the ad review results. Valid values:
   * 
   * *   **normal**: normal content
   * *   **ad**: other ads
   * *   **politics**: political content
   * *   **porn**: pornographic content
   * *   **abuse**: abuse
   * *   **terrorism**: terrorist content
   * *   **contraband**: prohibited content
   * *   **spam**: spam content
   * *   **npx**: illegal ad
   * *   **qrcode**: QR code
   * *   **programCode**: mini program code
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
   * The recommendation for review results. Valid values:
   * 
   * *   **block**: The content violates the regulations.
   * *   **review**: The content may violate the regulations.
   * *   **pass**: The content passes the review.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the snapshot that has the highest score in the category.
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
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture
   * *   **smoking**: smoking
   * *   **drivelive**: live broadcasting in a running vehicle
   * 
   * @example
   * live
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
   * 
   * *   **normal**: normal content
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture
   * *   **smoking**: smoking
   * *   **drivelive**: live broadcasting in a running vehicle
   * 
   * @example
   * live
   */
  label?: string;
  /**
   * @remarks
   * The score of the snapshot in the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * http://temp-****bucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
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
   * The average score of the review results.
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
   * 
   * *   **normal**: normal content
   * *   **meaningless**: meaningless content, such as a black or white screen.
   * *   **PIP**: picture-in-picture
   * *   **smoking**: smoking
   * *   **drivelive**: live broadcasting in a running vehicle
   * 
   * @example
   * live
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
   * The recommendation for review results. Valid values:
   * 
   * *   **block**: The content violates the regulations.
   * *   **review**: The content may violate the regulations.
   * *   **pass**: The content passes the review.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the snapshot that has the highest score in the category.
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
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content
   * *   **TV**: controlled TV station logo
   * *   **trademark**: trademark
   * 
   * @example
   * logo
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
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content
   * *   **TV**: controlled TV station logo
   * *   **trademark**: trademark
   * 
   * @example
   * logo
   */
  label?: string;
  /**
   * @remarks
   * The score of the snapshot in the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * http://temp-****bucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
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
   * The average score of the snapshots in the category indicated by Label.
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
   * The category of the review result. Valid values:
   * 
   * *   **normal**: normal content
   * *   **TV**: controlled TV station logo
   * *   **trademark**: trademark
   * 
   * @example
   * logo
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the snapshot of the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**: The content violates the regulations.
   * *   **review**: The content may violate the regulations.
   * *   **pass**: The content passes the review.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the snapshot that has the highest score in the category.
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
   * The results of pornographic content review. Valid values:
   * 
   * *   **porn**
   * *   **sexy**
   * *   **normal**
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
   * The results of pornographic content review. Valid values:
   * 
   * *   **porn**
   * *   **sexy**
   * *   **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the snapshot in the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * http://temp-****bucket.oss-cn-shanghai.aliyuncs.com/aivideocensor/****.jpg
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
   * The average score of the snapshots of the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The number of snapshots of each category in the review result.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **porn**
   * *   **sexy**
   * *   **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the snapshot of the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**: The content violates the regulations.
   * *   **review**: The content may violate the regulations.
   * *   **pass**: The content passes the review.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the snapshot that has the highest score in the category.
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
   * The results of terrorist content review. Valid values:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
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
   * The results of terrorist content review. Valid values:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the snapshot in the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The timestamp of the snapshot in the video. Unit: milliseconds.
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
   * The average score of the snapshots of the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The categories of terrorist content review results and the number of video snapshots in each category.
   */
  counterList?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **normal**
   * *   **bloody**
   * *   **explosion**
   * *   **outfit**
   * *   **logo**
   * *   **weapon**
   * *   **politics**
   * *   **violence**
   * *   **crowd**
   * *   **parade**
   * *   **carcrash**
   * *   **flag**
   * *   **location**
   * *   **others**
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The highest score of the snapshot of the category that is indicated by Label. Valid values: `[0, 100]`. The value is accurate to 10 decimal places. The score is representative of the confidence.
   * 
   * @example
   * 100
   */
  maxScore?: string;
  /**
   * @remarks
   * The recommendation for terrorist content review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the snapshot that has the highest score in the category.
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
   * The results of ad review.
   */
  adResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultAdResult;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * *   **porn**: pornographic content
   * *   **terrorism**: terrorist or politically sensitive content
   * *   **ad**: ad violation
   * *   **live**: undesirable scene
   * *   **logo**: logo
   * *   **normal**
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The results of undesired content review.
   */
  liveResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLiveResult;
  /**
   * @remarks
   * The results of logo review.
   */
  logoResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultLogoResult;
  /**
   * @remarks
   * The results of pornographic content review.
   */
  pornResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataVideoResultPornResult;
  /**
   * @remarks
   * The recommendation for video review results. Valid values:
   * 
   * *   **block**
   * *   **review**
   * *   **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The results of terrorist content review.
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
   * The content that violates the regulations. Separate multiple values with commas (,). Valid values:
   * 
   * *   **video**: the video.
   * *   **image-cover**: the cover.
   * *   **text-title**: the title.
   * 
   * @example
   * video
   */
  abnormalModules?: string;
  /**
   * @remarks
   * The results of audio review.
   */
  audioResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataAudioResult[];
  /**
   * @remarks
   * The results of image review.
   */
  imageResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataImageResult[];
  /**
   * @remarks
   * The category of the review result. Multiple values are separated by commas (,). Valid values:
   * 
   * *   **porn**: pornographic content
   * *   **terrorism**: terrorist or politically sensitive content
   * *   **ad**: ad violation
   * *   **live**: undesirable scene
   * *   **logo**: logo
   * *   **audio**: audio anti-spam
   * *   **normal**: normal content
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * *   **block**: The content violates the regulations.
   * *   **review**: The content may violate the regulations.
   * *   **pass**: The content passes the review.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The text moderation results.
   */
  textResult?: GetAIMediaAuditJobResponseBodyMediaAuditJobDataTextResult[];
  /**
   * @remarks
   * The results of video review.
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
   * The error code. This parameter is returned if the value of Status is fail.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The time when the job is complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the job started to run. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The job result.
   */
  data?: GetAIMediaAuditJobResponseBodyMediaAuditJobData;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * bdbc266af6894*****943a70176d92e9
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * fe028d09441d*****d1afffb138cd7e
   */
  mediaId?: string;
  /**
   * @remarks
   * The error message. This parameter is returned if the value of Status is fail.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **success**: The job is successful.
   * *   **fail**: The job failed.
   * *   **init**: The job is being initialized.
   * *   **Processing**: The job is in progress.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The type of the job. The value is AIMediaAudit.
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
   * The information about the intelligent review job.
   */
  mediaAuditJob?: GetAIMediaAuditJobResponseBodyMediaAuditJob;
  /**
   * @remarks
   * The ID of the request.
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

