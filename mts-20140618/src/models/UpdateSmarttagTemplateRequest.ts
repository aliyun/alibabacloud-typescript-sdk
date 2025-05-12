// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmarttagTemplateRequest extends $dara.Model {
  /**
   * @example
   * ocr,asr
   */
  analyseTypes?: string;
  /**
   * @example
   * celebrity
   */
  faceCategoryIds?: string;
  /**
   * @example
   * { "faceDetThreshold":0.999, "faceRegThreshold":0.9 }
   */
  faceCustomParamsConfig?: string;
  /**
   * @example
   * common
   */
  industry?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * { "type": "name,location,organization,other" }
   */
  keywordConfig?: string;
  /**
   * @example
   * { "movie":"name,alias,chnl,genre", "music":"songName,artistName", "person":"name,gender" }
   */
  knowledgeConfig?: string;
  /**
   * @example
   * hmi
   */
  labelType?: string;
  /**
   * @example
   * 1.0
   */
  labelVersion?: string;
  /**
   * @example
   * common
   */
  landmarkGroupIds?: string;
  /**
   * @example
   * general,item,weapon,animal
   */
  objectGroupIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * search
   */
  scene?: string;
  templateConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 05de22f255284c7a8d2aab535dde****
   */
  templateId?: string;
  /**
   * @example
   * template-example-****
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
      templateConfig: 'TemplateConfig',
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
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
      templateConfig: 'string',
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

