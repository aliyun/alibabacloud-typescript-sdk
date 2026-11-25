// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishAppInstanceRequest extends $dara.Model {
  artifactDigest?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250821161210000001
   */
  bizId?: string;
  candidateId?: string;
  /**
   * @remarks
   * The deployment channel.
   * 
   * @example
   * PC
   */
  deployChannel?: string;
  /**
   * @remarks
   * The publish description.
   * 
   * @example
   * CREATE_BY_NLB.nlb-jcvs5sm9l8um84zbfa
   */
  description?: string;
  ext?: string;
  idempotencyKey?: string;
  /**
   * @remarks
   * The logical version number.
   * 
   * @example
   * 111
   */
  logicalNumber?: number;
  platformAppid?: string;
  pluginDeclarationHash?: string;
  privacyDraftId?: string;
  privacyRevision?: string;
  /**
   * @remarks
   * The publish number.
   * 
   * @example
   * 123
   */
  publishNumber?: string;
  publishOrderId?: number;
  uploadSequence?: number;
  /**
   * @remarks
   * The action.
   * 
   * @example
   * BUILD
   */
  weappAction?: string;
  static names(): { [key: string]: string } {
    return {
      artifactDigest: 'ArtifactDigest',
      bizId: 'BizId',
      candidateId: 'CandidateId',
      deployChannel: 'DeployChannel',
      description: 'Description',
      ext: 'Ext',
      idempotencyKey: 'IdempotencyKey',
      logicalNumber: 'LogicalNumber',
      platformAppid: 'PlatformAppid',
      pluginDeclarationHash: 'PluginDeclarationHash',
      privacyDraftId: 'PrivacyDraftId',
      privacyRevision: 'PrivacyRevision',
      publishNumber: 'PublishNumber',
      publishOrderId: 'PublishOrderId',
      uploadSequence: 'UploadSequence',
      weappAction: 'WeappAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactDigest: 'string',
      bizId: 'string',
      candidateId: 'string',
      deployChannel: 'string',
      description: 'string',
      ext: 'string',
      idempotencyKey: 'string',
      logicalNumber: 'number',
      platformAppid: 'string',
      pluginDeclarationHash: 'string',
      privacyDraftId: 'string',
      privacyRevision: 'string',
      publishNumber: 'string',
      publishOrderId: 'number',
      uploadSequence: 'number',
      weappAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

