// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnrolledAccountResponseBodyBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The configuration of the baseline item.
   * 
   * @example
   * {\\"Notifications\\":[{\\"GroupKey\\":\\"account_msg\\",\\"Contacts\\":[{\\"Name\\":\\"aa\\"}],\\"PmsgStatus\\":1,\\"EmailStatus\\":1,\\"SmsStatus\\":1}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether baseline item is skipped. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyErrorInfo extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CompliancePackExists
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The compliance pack already exists.
   */
  message?: string;
  /**
   * @remarks
   * The recommended solution.
   * 
   * @example
   * https://next.api.aliyun.com/troubleshoot?q=CompliancePackExists\\\\u0026product=Config
   */
  recommend?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D5EAA86-2D41-5CB7-8DA7-B60093ACAA4E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      recommend: 'Recommend',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      recommend: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputsBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
   * 
   * @example
   * {\\"Contacts\\":[{\\"Name\\":\\"governance\\",\\"Email\\":\\"wibud****@gmail.com\\",\\"Mobile\\":\\"1234\\",\\"Position\\":\\"Other\\"}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether baseline item is skipped. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * product
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * governance
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetEnrolledAccountResponseBodyInputs extends $dara.Model {
  /**
   * @remarks
   * The prefix of the account name.
   * 
   * @example
   * test-account
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 12868156179*****
   */
  accountUid?: number;
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: GetEnrolledAccountResponseBodyInputsBaselineItems[];
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the settlement account.
   * 
   * @example
   * 19534534552*****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The tag.
   */
  tag?: GetEnrolledAccountResponseBodyInputsTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineItems: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyInputsBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      tag: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyInputsTag },
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyProgress extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * The status of applying the baseline to the account. Valid values:
   * 
   * *   Pending: The baseline is pending to be applied to the account.
   * *   Running: The baseline is being applied to the account.
   * *   Finished: : The baseline is applied to the account.
   * *   Failed: : The baseline fails to be applied to the account.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 12868156179*****
   */
  accountUid?: number;
  /**
   * @remarks
   * The ID of the baseline that is implemented.
   * 
   * @example
   * afb-bp1adadfadsf***
   */
  baselineId?: string;
  /**
   * @remarks
   * The array that contains baseline items.
   */
  baselineItems?: GetEnrolledAccountResponseBodyBaselineItems[];
  /**
   * @remarks
   * The time when the account was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * >  This parameter is returned if the value of `Status` is `Failed` or `ScheduleFailed`.
   */
  errorInfo?: GetEnrolledAccountResponseBodyErrorInfo;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * Indicates whether the initialization is complete. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  initialized?: boolean;
  /**
   * @remarks
   * Input parameters used to create an account.
   */
  inputs?: GetEnrolledAccountResponseBodyInputs;
  /**
   * @remarks
   * The ID of the management account of the resource directory to which the account belongs.
   * 
   * @example
   * 19534534552*****
   */
  masterAccountUid?: number;
  /**
   * @remarks
   * The ID of the settlement account.
   * 
   * @example
   * 19534534552*****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The progress of the applying the baseline to the account.
   */
  progress?: GetEnrolledAccountResponseBodyProgress[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   Pending: The account is pending to be created.
   * *   Running: The account is being created.
   * *   Finished: The account is created.
   * *   Failed: The account fails to be created.
   * *   Scheduling: The account is being scheduled.
   * *   ScheduleFailed: The account fails to be scheduled.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      errorInfo: 'ErrorInfo',
      folderId: 'FolderId',
      initialized: 'Initialized',
      inputs: 'Inputs',
      masterAccountUid: 'MasterAccountUid',
      payerAccountUid: 'PayerAccountUid',
      progress: 'Progress',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyBaselineItems },
      createTime: 'string',
      displayName: 'string',
      errorInfo: GetEnrolledAccountResponseBodyErrorInfo,
      folderId: 'string',
      initialized: 'boolean',
      inputs: GetEnrolledAccountResponseBodyInputs,
      masterAccountUid: 'number',
      payerAccountUid: 'number',
      progress: { 'type': 'array', 'itemType': GetEnrolledAccountResponseBodyProgress },
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    if(this.errorInfo && typeof (this.errorInfo as any).validate === 'function') {
      (this.errorInfo as any).validate();
    }
    if(this.inputs && typeof (this.inputs as any).validate === 'function') {
      (this.inputs as any).validate();
    }
    if(Array.isArray(this.progress)) {
      $dara.Model.validateArray(this.progress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

