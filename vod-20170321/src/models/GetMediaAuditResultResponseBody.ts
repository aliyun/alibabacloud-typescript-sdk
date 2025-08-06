// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditResultResponseBodyMediaAuditResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The category of the review result.
   * 
   * *   **normal**
   * *   **spam**
   * *   **ad**
   * *   **politics**
   * *   **terrorism**
   * *   **abuse**
   * *   **porn**
   * *   **flood**
   * *   **contraband**
   * *   **meaningless**
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult extends $dara.Model {
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
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The review scenario. Valid values:
   * 
   * *   **terrorism**
   * *   **porn**
   * 
   * @example
   * porn
   */
  scene?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100.00000
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

export class GetMediaAuditResultResponseBodyMediaAuditResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The category of the review result. Separate multiple values with commas (,). Valid values:
   * 
   * *   **porn**
   * *   **terrorism**
   * *   **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * Details of image review results.
   */
  result?: GetMediaAuditResultResponseBodyMediaAuditResultImageResultResult[];
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
   * The type of the image. The value is **cover**.
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
   * The text content for review.
   * 
   * @example
   * hot line 123****
   */
  content?: string;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **spam**
   * - **ad**
   * - **abuse**
   * - **flood**
   * - **contraband**
   * - **meaningless**
   * - **normal**
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
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100.00000
   */
  score?: string;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * - **block**
   * - **review**
   * - **pass**
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList extends $dara.Model {
  /**
   * @remarks
   * The number of frames.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **ad**
   * - **normal**
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
   * The category of the review result. 
   * 
   * - **ad**
   * - **normal**
   * 
   * @example
   * ad
   */
  label?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the image.
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The statistics about tag frames.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **ad**
   * - **normal**
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
   * - **block**
   * - **review**
   * - **pass**
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the image with the highest score of the category that is indicated by Label.
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
   * The number of frames.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **live**: The content contains undesirable scenes.
   * - **normal**: normal content.
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultTopList extends $dara.Model {
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **live**: The content contains undesirable scenes.
   * - **normal**: normal content.
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 10
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the image.
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The statistics about tag frames.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **live**: The content contains undesirable scenes.
   * - **normal**: normal content.
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
   * - **block**
   * - **review**
   * - **pass**
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the image with the highest score of the category that is indicated by Label.
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
   * The number of frames.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **logo**
   * - **normal**
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

export class GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultTopList extends $dara.Model {
  /**
   * @remarks
   * The category of the review result.
   * 
   * - **logo**
   * - **normal**
   * 
   * @example
   * logo
   */
  label?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 16
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the image.
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The statistics about tag frames.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **logo**
   * - **normal**
   * 
   * @example
   * logo
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
   * - **block**
   * - **review**
   * - **pass**
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the image with the highest score of the category that is indicated by Label.
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
   * The number of frames.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **porn**
   * - **sexy**
   * - **normal**
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
   * The category of the review result. Valid values:
   * 
   * - **porn**
   * - **sexy**
   * - **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100.0000
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the image.
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The statistics about tag frames.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **porn**
   * - **sexy**
   * - **normal**
   * 
   * @example
   * porn
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
   * The recommendation for review results.
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the image with the highest score of the category that is indicated by Label.
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
   * The number of frames.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **normal**
   * - **bloody**
   * - **explosion**
   * - **outfit**
   * - **logo**
   * - **weapon**
   * - **politics**
   * - **violence**
   * - **crowd**
   * - **parade**
   * - **carcrash**
   * - **flag**
   * - **location**
   * - **others**
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
   * The category of the review result. Valid values:
   * 
   * - **normal**
   * - **bloody**
   * - **explosion**
   * - **outfit**
   * - **logo**
   * - **weapon**
   * - **politics**
   * - **violence**
   * - **crowd**
   * - **parade**
   * - **carcrash**
   * - **flag**
   * - **location**
   * - **others**
   * 
   * @example
   * normal
   */
  label?: string;
  /**
   * @remarks
   * The score of the image of the category that is indicated by Label.
   * 
   * @example
   * 100.000
   */
  score?: string;
  /**
   * @remarks
   * The position in the video. Unit: milliseconds.
   * 
   * @example
   * 3005
   */
  timestamp?: string;
  /**
   * @remarks
   * The URL of the image.
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
   * The average score of the review results.
   * 
   * @example
   * 100
   */
  averageScore?: string;
  /**
   * @remarks
   * The statistics about tag frames.
   */
  counterList?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultTerrorismResultCounterList[];
  /**
   * @remarks
   * The category of the review result. Valid values:
   * 
   * - **normal**
   * - **bloody**
   * - **explosion**
   * - **outfit**
   * - **logo**
   * - **weapon**
   * - **politics**
   * - **violence**
   * - **crowd**
   * - **parade**
   * - **carcrash**
   * - **flag**
   * - **location**
   * - **others**
   * 
   * @example
   * normal
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
   * - **block**
   * - **review**
   * - **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The information about the image with the highest score of the category that is indicated by Label.
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
   * The results of ad review.
   */
  adResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultAdResult;
  /**
   * @remarks
   * The category of the review result. Separate multiple values with commas (,). Valid values: 
   * 
   * - **porn**
   * - **terrorism**
   * - **normal**
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The results of undesired content review.
   */
  liveResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLiveResult;
  /**
   * @remarks
   * The results of logo review.
   */
  logoResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultLogoResult;
  /**
   * @remarks
   * The results of pornographic content review.
   */
  pornResult?: GetMediaAuditResultResponseBodyMediaAuditResultVideoResultPornResult;
  /**
   * @remarks
   * The recommendation for review results. Valid values:
   * 
   * - **block**
   * - **review**
   * - **pass**
   * 
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @remarks
   * The results of terrorist content review.
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
   * The content that violates the regulations. Separate multiple values with commas (,). Valid values:
   * 
   * *   **video**
   * *   **image-cover**
   * *   **text-title**
   * 
   * @example
   * video
   */
  abnormalModules?: string;
  /**
   * @remarks
   * The results of audio review.
   */
  audioResult?: GetMediaAuditResultResponseBodyMediaAuditResultAudioResult[];
  /**
   * @remarks
   * The results of image review.
   */
  imageResult?: GetMediaAuditResultResponseBodyMediaAuditResultImageResult[];
  /**
   * @remarks
   * The category of the review result. Separate multiple values with commas (,). Valid values:
   * 
   * *   **porn**
   * *   **terrorism**
   * *   **normal**
   * 
   * @example
   * porn
   */
  label?: string;
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
   * The results of text review.
   */
  textResult?: GetMediaAuditResultResponseBodyMediaAuditResultTextResult[];
  /**
   * @remarks
   * The results of video review.
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
   * The review results.
   */
  mediaAuditResult?: GetMediaAuditResultResponseBodyMediaAuditResult;
  /**
   * @remarks
   * The ID of the request.
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

