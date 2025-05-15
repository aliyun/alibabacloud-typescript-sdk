// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata";
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata";


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata extends $dara.Model {
  /**
   * @remarks
   * The category of the check item.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * If you use an AccessKey pair of an Alibaba Cloud account, you have full permissions on the resources of the account. You cannot set limits on the account, such as setting limits on source IP addresses or access duration. If the AccessKey pair is leaked, resources within the account are exposed to high security risks. If your Alibaba Cloud account has an existing AccessKey pair, the check result is Non-compliant.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the check item.
   * 
   * @example
   * An AccessKey pair is enabled for the Alibaba Cloud account.
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the metadata.
   * 
   * @example
   * pxgtda****
   */
  id?: string;
  /**
   * @remarks
   * The governance level of the check item.
   * 
   * @example
   * High
   */
  recommendationLevel?: string;
  /**
   * @remarks
   * The metadata of the fixing task.
   */
  remediationMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata;
  /**
   * @remarks
   * The metadata of the checked resources.
   */
  resourceMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata;
  /**
   * @remarks
   * The scope of the check item. Valid values:
   * 
   * *   Account: the check item in a single-account governance maturity check
   * *   ResourceDirectory: the check item in a multi-account governance maturity check
   * 
   * @example
   * Account
   */
  scope?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   Released: The check item is released.
   * *   Beta: The check item is pre-released.
   * 
   * @example
   * Released
   */
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      recommendationLevel: 'RecommendationLevel',
      remediationMetadata: 'RemediationMetadata',
      resourceMetadata: 'ResourceMetadata',
      scope: 'Scope',
      stage: 'Stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      displayName: 'string',
      id: 'string',
      recommendationLevel: 'string',
      remediationMetadata: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata,
      resourceMetadata: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata,
      scope: 'string',
      stage: 'string',
    };
  }

  validate() {
    if(this.remediationMetadata && typeof (this.remediationMetadata as any).validate === 'function') {
      (this.remediationMetadata as any).validate();
    }
    if(this.resourceMetadata && typeof (this.resourceMetadata as any).validate === 'function') {
      (this.resourceMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

