// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmarttagTemplateListResponseBodyTemplatesTemplate extends $dara.Model {
  /**
   * @remarks
   * The analysis types that are used in the template. One or more values are returned. Valid values:
   * 
   * *   **ocr**: text recognition
   * *   **asr**: speech recognition
   * *   **classification**: video classification
   * *   **shows**: program recognition
   * *   **face**: facial recognition
   * *   **role**: figure recognition
   * *   **object**: object recognition
   * *   **tvstation**: logo recognition
   * *   **action**: action recognition
   * *   **emotion**: facial expression recognition
   * *   **landmark**: landmark recognition
   * *   **scene**: scene recognition
   * *   **movieip**: movie intellectual property recognition
   * *   **subtitle**: subtitle extraction
   * 
   * @example
   * ocr,asr,classification,shows,face,role,object,tvstation,action,emotion,landmark,scene
   */
  analyseTypes?: string;
  /**
   * @remarks
   * The IDs of the system facial image libraries that are used in the template. One or more values are returned. Valid values:
   * 
   * *   celebrity: the facial image library of celebrities
   * *   politician: the facial image library of politicians
   * *   sensitive: the facial image library of sensitive figures
   * 
   * @example
   * politician,sensitive,celebrity
   */
  faceCategoryIds?: string;
  /**
   * @remarks
   * The configurations of face-related algorithms. The value of this parameter is a JSON string and consists of the thresholds set for face detection and facial recognition. Valid values:
   * 
   * *   **faceDetThreshold**: The default threshold for face detection is 0.999. The threshold takes effect only for the faces that are strange to the system.
   * *   **faceRegThreshold**: The default threshold for facial recognition is 0.9.
   * 
   * @example
   * { "faceDetThreshold":0.999, "faceRegThreshold":0.9 }
   */
  faceCustomParamsConfig?: string;
  /**
   * @remarks
   * The industry to which the template applies. Default value: **common**. Valid values:
   * 
   * *   **microVideo**: short video industry
   * *   **common**: general industries
   * 
   * @example
   * common
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the template is the default template. Valid values:
   * 
   * *   **true**: The template is the default template.
   * *   **false**: The template is not the default template.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The configuration of keyword tags. The type field specifies the category of a keyword tag. You can specify one or more values and separate the values with commas (,). Valid values:
   * 
   * *   name
   * *   location
   * *   organization
   * *   other
   * 
   * > Keyword tags of all the categories are returned in one of the following scenarios: The KeywordConfig parameter is not specified or the Keyword field is invalid because it is not a JSON string, or the KeywordConfig parameter does not contain the type field or the type field is invalid.
   * 
   * @example
   * { "type": "name,location,organization,other" }
   */
  keywordConfig?: string;
  /**
   * @remarks
   * The fields to be identified as knowledge graph information when tags are returned in Smart tagging V2.0 and Smart tagging V2.0-custom modes. For more information, see [Knowledge graph fields in smart tagging jobs](https://help.aliyun.com/document_detail/356383.html). If this parameter is not specified or the specified value is NULL or invalid because it is not a JSON string, the following fields are returned:
   * 
   * *   movie-related fields:
   * 
   *     *   name: the name of the intellectual property that is featured in the movie
   *     *   alias: the alias of the intellectual property that is featured in the movie
   *     *   chnl: the category of the movie
   *     *   genre: the genre of the movie
   *     *   country: the country or region in which the movie was produced
   *     *   language: the language of the movie
   *     *   releaseYear: the year when the movie was released
   * 
   * *   music-related fields:
   * 
   *     *   songName: the name of the song
   *     *   artistName: the name of the singer
   *     *   artistArea: the region to which the singer belongs, such as China, Japan, Korea, Europe, and America, or others.
   *     *   albumName: the name of the album
   * 
   * *   person-related fields:
   * 
   *     *   name: the name of the person
   *     *   gender: the gender of the person
   *     *   citizenship: the nationality of the person
   *     *   occupation: the occupation of the person
   *     *   classification: the type into which the person is classified
   *     *   nationality: the ethnic group of the person
   *     *   birthPlace: the place where the person was born
   *     *   birthDate: the date when the person was born
   * 
   * *   landmark-related fields:
   * 
   *     *   name: the display name of the landmark
   *     *   nameEn: the English name of the landmark
   *     *   Description: the description of the parameter
   *     *   address: the address of the landmark
   * 
   * *   item-related fields:
   * 
   *     *   brandName: the brand of the item
   *     *   finegrainName: the fine-grained description of the item
   * 
   * @example
   * { "movie":"name,alias,chnl,genre", "music":"songName,artistName", "person":"name,gender" }
   */
  knowledgeConfig?: string;
  /**
   * @remarks
   * The type of the tagging. Default value: **auto**. Valid values:
   * 
   * *   **auto**: machine tagging
   * *   **hmi**: tagging by human and machine
   * 
   * @example
   * hmi
   */
  labelType?: string;
  /**
   * @remarks
   * The version of the smart tagging feature. Default value: 1.0. Valid values:
   * 
   * *   1.0: Smart tagging V1.0
   * *   2.0: Smart tagging V2.0 (CPV tagging)
   * *   2.0-custom: Smart tagging V2.0-custom (CPV tagging by using custom models)
   * 
   * @example
   * 1.0
   */
  labelVersion?: string;
  /**
   * @remarks
   * The IDs of the landmark libraries that are used in the template.
   * 
   * @example
   * common
   */
  landmarkGroupIds?: string;
  /**
   * @remarks
   * The IDs of the object libraries that are used in the template.
   * 
   * @example
   * general,item,weapon,animal
   */
  objectGroupIds?: string;
  /**
   * @remarks
   * The scenario in which the template is used. Valid values:
   * 
   * *   **search**: search scenarios
   * *   **recommend**: recommendation scenarios
   * 
   * @example
   * search
   */
  scene?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 05de22f255284c7a8d2aab535dde****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * example-****
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      analyseTypes: 'AnalyseTypes',
      faceCategoryIds: 'FaceCategoryIds',
      faceCustomParamsConfig: 'FaceCustomParamsConfig',
      industry: 'Industry',
      isDefault: 'IsDefault',
      keywordConfig: 'KeywordConfig',
      knowledgeConfig: 'KnowledgeConfig',
      labelType: 'LabelType',
      labelVersion: 'LabelVersion',
      landmarkGroupIds: 'LandmarkGroupIds',
      objectGroupIds: 'ObjectGroupIds',
      scene: 'Scene',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyseTypes: 'string',
      faceCategoryIds: 'string',
      faceCustomParamsConfig: 'string',
      industry: 'string',
      isDefault: 'boolean',
      keywordConfig: 'string',
      knowledgeConfig: 'string',
      labelType: 'string',
      labelVersion: 'string',
      landmarkGroupIds: 'string',
      objectGroupIds: 'string',
      scene: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBodyTemplates extends $dara.Model {
  template?: QuerySmarttagTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QuerySmarttagTemplateListResponseBodyTemplatesTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmarttagTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8796E26
   */
  requestId?: string;
  /**
   * @remarks
   * The templates.
   */
  templates?: QuerySmarttagTemplateListResponseBodyTemplates;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: QuerySmarttagTemplateListResponseBodyTemplates,
    };
  }

  validate() {
    if(this.templates && typeof (this.templates as any).validate === 'function') {
      (this.templates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

