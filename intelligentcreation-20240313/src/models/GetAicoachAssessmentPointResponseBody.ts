// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues extends $dara.Model {
  name?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues extends $dara.Model {
  answerName?: string;
  answerWeight?: number;
  keywordValues?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues[];
  keywordWeight?: number;
  scoringRules?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules[];
  static names(): { [key: string]: string } {
    return {
      answerName: 'answerName',
      answerWeight: 'answerWeight',
      keywordValues: 'keywordValues',
      keywordWeight: 'keywordWeight',
      scoringRules: 'scoringRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerName: 'string',
      answerWeight: 'number',
      keywordValues: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesKeywordValues },
      keywordWeight: 'number',
      scoringRules: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValuesScoringRules },
    };
  }

  validate() {
    if(Array.isArray(this.keywordValues)) {
      $dara.Model.validateArray(this.keywordValues);
    }
    if(Array.isArray(this.scoringRules)) {
      $dara.Model.validateArray(this.scoringRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachAssessmentPointResponseBodyAnswerListParameters extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachAssessmentPointResponseBodyAnswerList extends $dara.Model {
  answerValues?: GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues[];
  enabledKeyword?: boolean;
  nameList?: string[];
  operators?: string;
  parameters?: GetAICoachAssessmentPointResponseBodyAnswerListParameters[];
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      answerValues: 'answerValues',
      enabledKeyword: 'enabledKeyword',
      nameList: 'nameList',
      operators: 'operators',
      parameters: 'parameters',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerValues: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListAnswerValues },
      enabledKeyword: 'boolean',
      nameList: { 'type': 'array', 'itemType': 'string' },
      operators: 'string',
      parameters: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerListParameters },
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.answerValues)) {
      $dara.Model.validateArray(this.answerValues);
    }
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAICoachAssessmentPointResponseBody extends $dara.Model {
  answerList?: GetAICoachAssessmentPointResponseBodyAnswerList[];
  citations?: number;
  documentId?: string;
  documentName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  kbId?: string;
  kbType?: string;
  knowledgeList?: string[];
  name?: string;
  pointId?: string;
  questionDescription?: string;
  questionSample?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      answerList: 'answerList',
      citations: 'citations',
      documentId: 'documentId',
      documentName: 'documentName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      kbId: 'kbId',
      kbType: 'kbType',
      knowledgeList: 'knowledgeList',
      name: 'name',
      pointId: 'pointId',
      questionDescription: 'questionDescription',
      questionSample: 'questionSample',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerList: { 'type': 'array', 'itemType': GetAICoachAssessmentPointResponseBodyAnswerList },
      citations: 'number',
      documentId: 'string',
      documentName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      kbId: 'string',
      kbType: 'string',
      knowledgeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pointId: 'string',
      questionDescription: 'string',
      questionSample: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.answerList)) {
      $dara.Model.validateArray(this.answerList);
    }
    if(Array.isArray(this.knowledgeList)) {
      $dara.Model.validateArray(this.knowledgeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

