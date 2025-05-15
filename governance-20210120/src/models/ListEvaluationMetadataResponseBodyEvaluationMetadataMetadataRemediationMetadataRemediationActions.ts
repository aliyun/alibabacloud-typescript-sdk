// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance";


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActions extends $dara.Model {
  /**
   * @remarks
   * The fixing method.
   * 
   * >  This parameter is returned only if the value of `RemediationType` is `Analysis`.
   * 
   * @example
   * UnusedAccessKeyInRamUser
   */
  classification?: string;
  /**
   * @remarks
   * The fixing cost.
   * 
   * @example
   * You are not charged for this operation.
   */
  costDescription?: string;
  /**
   * @remarks
   * The description of the fixing item.
   * 
   * >  This parameter is returned only if the value of `RemediationType` is `Analysis`.
   * 
   * @example
   * Console logon is enabled for the RAM user. The RAM user owns an AccessKey pair that is never used.
   */
  description?: string;
  /**
   * @remarks
   * The content of the fixing items.
   */
  guidance?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance[];
  /**
   * @remarks
   * The usage notes of the fixing item.
   * 
   * @example
   * The BestPracticesForIdentityAndPermissions compliance package is enabled in Cloud Config to check the settings and usage of the AccessKey pair, Alibaba Cloud account, and RAM users.
   */
  notice?: string;
  /**
   * @remarks
   * The fixing suggestion.
   * 
   * >  This parameter is returned only if the value of `RemediationType` is `Analysis`.
   * 
   * @example
   * Console logon is enabled for the RAM user and the RAM user owns an AccessKey pair, while the AccessKey pair has never been used by the RAM user. We recommend that you disable the AccessKey pair for 90 days. If no related issue occurs during this period, you can delete the AccessKey pair.
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      costDescription: 'CostDescription',
      description: 'Description',
      guidance: 'Guidance',
      notice: 'Notice',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      costDescription: 'string',
      description: 'string',
      guidance: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance },
      notice: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.guidance)) {
      $dara.Model.validateArray(this.guidance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

