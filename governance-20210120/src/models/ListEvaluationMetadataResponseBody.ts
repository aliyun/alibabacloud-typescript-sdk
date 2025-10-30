// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance extends $dara.Model {
  /**
   * @remarks
   * The display name of the fixing button.
   * 
   * @example
   * Manual fixing
   */
  buttonName?: string;
  /**
   * @remarks
   * The navigation URL of the fixing button.
   * 
   * @example
   * https://ram.console.aliyun.com/users
   */
  buttonRef?: string;
  /**
   * @remarks
   * The fixing procedure.
   * 
   * @example
   * You must replace the AccessKey pair of your Alibaba Cloud account. To do so, perform the following steps:</br>1. Log on to the RAM console. In the left-side navigation pane, choose Identities > Users. On the Users page, click Create User.</br>2. On the Create User page, enter a logon name and select OpenAPI Access for the Access Mode parameter.</br>3. After the RAM user is created, save the AccessKey pair. Then, find the user that you created on the Users page and click Add Permissions in the Actions column. In the Grant Permission panel, find the AdministratorAccess policy and attach it to the RAM user.</br>4. In a program, replace the AccessKey pair of the Alibaba Cloud account with the AccessKey pair of the RAM user created in the previous step and check whether the program runs as expected in the test environment.</br>5. If the program runs as expected, publish the program to the production environment and disable the previous AccessKey pair of your Alibaba Cloud account. Then, check whether the program runs as expected.</br>6. If the program runs as expected, delete the disabled AccessKey pair after the specified period of time, such as 90 days.
   */
  content?: string;
  /**
   * @remarks
   * The title of the fixing procedure.
   * 
   * @example
   * Scenario 3: AccessKey pair that is used within the last 90 days
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      buttonName: 'ButtonName',
      buttonRef: 'ButtonRef',
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttonName: 'string',
      buttonRef: 'string',
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation extends $dara.Model {
  /**
   * @remarks
   * The fixing operations.
   */
  actions?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActions[];
  /**
   * @remarks
   * The type of the fixing method. Valid values:
   * 
   * *   Manual: manual fixing
   * *   QuickFix: quick fixing
   * *   Analysis: auxiliary decision-making
   * 
   * @example
   * Manual
   */
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActions },
      remediationType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata extends $dara.Model {
  /**
   * @remarks
   * The fixing items.
   */
  remediation?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation[];
  static names(): { [key: string]: string } {
    return {
      remediation: 'Remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation },
    };
  }

  validate() {
    if(Array.isArray(this.remediation)) {
      $dara.Model.validateArray(this.remediation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata extends $dara.Model {
  /**
   * @remarks
   * The display name of the resource property.
   * 
   * @example
   * AccessKey Pair Last Used At
   */
  displayName?: string;
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * AkLastUsedTime
   */
  propertyName?: string;
  /**
   * @remarks
   * The type of the resource property.
   * 
   * @example
   * String
   */
  propertyType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      propertyName: 'PropertyName',
      propertyType: 'PropertyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      propertyName: 'string',
      propertyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata of the resource properties.
   */
  resourcePropertyMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata[];
  static names(): { [key: string]: string } {
    return {
      resourcePropertyMetadata: 'ResourcePropertyMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePropertyMetadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePropertyMetadata)) {
      $dara.Model.validateArray(this.resourcePropertyMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  /**
   * @example
   * ResourceUtilization
   */
  topicCode?: string;
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
      topicCode: 'TopicCode',
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
      topicCode: 'string',
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

export class ListEvaluationMetadataResponseBodyEvaluationMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata objects of a specific metadata type.
   */
  metadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata[];
  /**
   * @remarks
   * The type of the metadata. Valid values:
   * 
   * *   Metric: the check item
   * 
   * @example
   * Metric
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metadata)) {
      $dara.Model.validateArray(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of a governance maturity check.
   */
  evaluationMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadata[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16B208DD-86BD-5E7D-AC93-FFD44B6FBDF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationMetadata: 'EvaluationMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationMetadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadata },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationMetadata)) {
      $dara.Model.validateArray(this.evaluationMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

