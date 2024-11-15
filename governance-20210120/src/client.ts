// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchEnrollAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The resource accounts.
   */
  accounts?: BatchEnrollAccountsRequestAccounts[];
  /**
   * @remarks
   * The baseline ID.
   * 
   * If this parameter is left empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   * 
   * If this parameter is specified, the configurations of the baseline items are merged with the baseline applied to the specified account. The configurations of the same baseline items are subject to the configurations of this parameter. We recommend that you leave this parameter empty and configure the `BaselineId` parameter to specify an account baseline and apply the configurations of the account baseline to the account.
   */
  baselineItems?: BatchEnrollAccountsRequestBaselineItems[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': BatchEnrollAccountsRequestAccounts },
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': BatchEnrollAccountsRequestBaselineItems },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnrollAccountsResponseBody extends $tea.Model {
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnrollAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchEnrollAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchEnrollAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountFactoryBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The baseline items.
   * 
   * You can call the [ListAccountFactoryBaselineItems](~~ListAccountFactoryBaselineItems~~) operation to query a list of baseline items supported by the account factory in Cloud Governance Center.
   */
  baselineItems?: CreateAccountFactoryBaselineRequestBaselineItems[];
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Default
   */
  baselineName?: string;
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Default Baseline.
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItems: { 'type': 'array', 'itemType': CreateAccountFactoryBaselineRequestBaselineItems },
      baselineName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountFactoryBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1e6ixtiwupap8m****
   */
  baselineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5592E2E-0FC4-557C-B989-DF229B5EBE13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountFactoryBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountFactoryBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccountFactoryBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountFactoryBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountFactoryBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F45D888-8C4D-55E5-ACA2-D1515159181D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountFactoryBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountFactoryBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountFactoryBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The prefix for the account name of the member.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * *   If the account baseline is applied to an account that is newly created, you do not need to configure this parameter.
   * *   If the account baseline is applied to an existing account, you must configure this parameter.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  /**
   * @remarks
   * The baseline ID.
   * 
   * If this parameter is left empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * An array that contains baseline items.
   * 
   * If this parameter is specified, the configurations of the baseline items are merged with the baseline of the specified account. The configurations of the same baseline items are subject to the configuration of this parameter. We recommend that you leave this parameter empty and configure the `BaselineId` parameter to specify an account baseline and apply the configuration of the account baseline to the account.
   */
  baselineItems?: EnrollAccountRequestBaselineItems[];
  /**
   * @remarks
   * The display name of the account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a parent folder. If you do not configure this parameter, the account is created in the Root folder.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a billing account. If you do not configure this parameter, the self-pay settlement method is used for the account.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * 19534534552****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * *   resell (default): The member is an account for a reseller. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * > This parameter is available only for resellers at the international site (alibabacloud.com).
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: EnrollAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      regionId: 'RegionId',
      resellAccountType: 'ResellAccountType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': EnrollAccountRequestBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      regionId: 'string',
      resellAccountType: 'string',
      tag: { 'type': 'array', 'itemType': EnrollAccountRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The prefix for the account name of the member.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * *   If the account baseline is applied to an account that is newly created, you do not need to configure this parameter.
   * *   If the account baseline is applied to an existing account, you must configure this parameter.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  /**
   * @remarks
   * The baseline ID.
   * 
   * If this parameter is left empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * An array that contains baseline items.
   * 
   * If this parameter is specified, the configurations of the baseline items are merged with the baseline of the specified account. The configurations of the same baseline items are subject to the configuration of this parameter. We recommend that you leave this parameter empty and configure the `BaselineId` parameter to specify an account baseline and apply the configuration of the account baseline to the account.
   */
  baselineItems?: EnrollAccountShrinkRequestBaselineItems[];
  /**
   * @remarks
   * The display name of the account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a parent folder. If you do not configure this parameter, the account is created in the Root folder.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a billing account. If you do not configure this parameter, the self-pay settlement method is used for the account.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * 19534534552****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * *   resell (default): The member is an account for a reseller. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * > This parameter is available only for resellers at the international site (alibabacloud.com).
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      regionId: 'RegionId',
      resellAccountType: 'ResellAccountType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': EnrollAccountShrinkRequestBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      regionId: 'string',
      resellAccountType: 'string',
      tagShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 143165363236****
   */
  accountUid?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7071E5FA-515E-5F53-B335-B87D619C6A66
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnrollAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnrollAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1nf0enuzb89az*****
   */
  baselineId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp16ae2k8a3yo3d*****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: GetAccountFactoryBaselineResponseBodyBaselineItems[];
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Default
   */
  baselineName?: string;
  /**
   * @remarks
   * The time when the baseline was created.
   * 
   * @example
   * 2022-11-28T00:46:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Default baseline
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60D54503-F1F6-51B6-B6FA-A70CBDA2A68C
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values:
   * 
   * *   System: default baseline.
   * *   Custom: custom baseline.
   * 
   * @example
   * Custom
   */
  type?: string;
  /**
   * @remarks
   * The time when the baseline was updated.
   * 
   * @example
   * 2022-11-02T01:00:07Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      requestId: 'RequestId',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': GetAccountFactoryBaselineResponseBodyBaselineItems },
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      requestId: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountFactoryBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountFactoryBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 19534534552****
   */
  accountUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBody extends $tea.Model {
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
   * An array that contains baseline items.
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
   * The input parameters that are used when the account was registered.
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
   * The time when the information about the account was updated.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEnrolledAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEnrolledAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The names of the baseline items.
   */
  names?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * AAAAACDGQdAEX3m42z3sQ+f3VTK2Xr2DzYbz/SAfc/zJRqod
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the baseline items.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
  /**
   * @remarks
   * The versions of the baseline items.
   */
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      type: 'Type',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
      type: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: ListAccountFactoryBaselineItemsResponseBodyBaselineItems[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAACDGQdAEX3m42z3sQ+f3VTK2Xr2DzYbz/SAfc/zJRqod
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B40D73D8-76AC-5D3C-AC63-4FC8AFCE6671
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItems: 'BaselineItems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItems: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountFactoryBaselineItemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountFactoryBaselineItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * You do not need to specify this parameter for the first request.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The baselines.
   */
  baselines?: ListAccountFactoryBaselinesResponseBodyBaselines[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3245E413-7CDD-5287-8988-6A94DE8A8369
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselines: 'Baselines',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselines: { 'type': 'array', 'itemType': ListAccountFactoryBaselinesResponseBodyBaselines },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAccountFactoryBaselinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAccountFactoryBaselinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsRequest extends $tea.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The accounts.
   */
  enrolledAccounts?: ListEnrolledAccountsResponseBodyEnrolledAccounts[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enrolledAccounts: 'EnrolledAccounts',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrolledAccounts: { 'type': 'array', 'itemType': ListEnrolledAccountsResponseBodyEnrolledAccounts },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnrolledAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnrolledAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataRequest extends $tea.Model {
  /**
   * @remarks
   * The language. The information is returned in the specified language. Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEvaluationMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEvaluationMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetricDetailsRequest extends $tea.Model {
  /**
   * @remarks
   * The account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 103144549568****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * You can call the [ListEvaluationMetadata](https://help.aliyun.com/document_detail/2841889.html) operation to query the ID of the check item.
   * 
   * @example
   * xfyve5****
   */
  id?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request. Default value: 5.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAGEaXR18y1rqykZHIqRuBejOqED4S3Xne33c7zbn****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetricDetailsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAGEaXR18y1rqykZHIqRuBejOqED4S3Xne33c7zbn****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC9BD94C-D20C-4D27-88D4-89E8D75C****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the non-compliant resources.
   */
  resources?: ListEvaluationMetricDetailsResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListEvaluationMetricDetailsResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetricDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEvaluationMetricDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEvaluationMetricDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD57329E-131A-59F4-8746-E1CD8D7B****
   */
  requestId?: string;
  /**
   * @remarks
   * The check results, including the status of the overall check and the results of check items.
   */
  results?: ListEvaluationResultsResponseBodyResults;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      requestId: 'string',
      results: ListEvaluationResultsResponseBodyResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * By default, the historical scores that were generated in the seven days before the current date are queried.
   * 
   * @example
   * 2024-07-11
   */
  endDate?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD format.
   * 
   * You can query the historical scores within the previous 180 days.
   * 
   * @example
   * 2024-06-11
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      endDate: 'EndDate',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      endDate: 'string',
      regionId: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC9BD94C-D20C-4D27-88D4-89E8D75C051B
   */
  requestId?: string;
  /**
   * @remarks
   * The historical scores.
   */
  scoreHistory?: ListEvaluationScoreHistoryResponseBodyScoreHistory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scoreHistory: 'ScoreHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scoreHistory: ListEvaluationScoreHistoryResponseBodyScoreHistory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEvaluationScoreHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEvaluationScoreHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEvaluationRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  metricIds?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The check range of the governance maturity check. Valid values:
   * 
   * *   Account (default): A single-account governance maturity check is performed to check only the Alibaba Cloud account that you use to access Cloud Governance Center.
   * *   ResourceDirectory: A multi-account governance maturity check is performed to check all members within a resource directory. Before you perform a multi-account governance maturity check, you must enable the multi-account governance maturity check feature.
   * 
   * @example
   * ResourceDirectory
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      metricIds: 'MetricIds',
      regionId: 'RegionId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEvaluationShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member. This parameter takes effect only when a multi-account governance maturity check is performed.
   * 
   * @example
   * 176618589410****
   */
  accountId?: number;
  metricIdsShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The check range of the governance maturity check. Valid values:
   * 
   * *   Account (default): A single-account governance maturity check is performed to check only the Alibaba Cloud account that you use to access Cloud Governance Center.
   * *   ResourceDirectory: A multi-account governance maturity check is performed to check all members within a resource directory. Before you perform a multi-account governance maturity check, you must enable the multi-account governance maturity check feature.
   * 
   * @example
   * ResourceDirectory
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      metricIdsShrink: 'MetricIds',
      regionId: 'RegionId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      metricIdsShrink: 'string',
      regionId: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEvaluationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D3E2A3A-F2B8-578D-9659-3195F94A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEvaluationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunEvaluationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountFactoryBaselineRequest extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1pq3emlkt27vsj****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   * 
   * You can call the [ListAccountFactoryBaselineItems](~~ListAccountFactoryBaselineItems~~) operation to query a list of baseline items supported by the account factory in Cloud Governance Center.
   */
  baselineItems?: UpdateAccountFactoryBaselineRequestBaselineItems[];
  /**
   * @remarks
   * The name of the baseline.
   */
  baselineName?: string;
  /**
   * @remarks
   * The description of the baseline.
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': UpdateAccountFactoryBaselineRequestBaselineItems },
      baselineName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountFactoryBaselineResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C18A891D-7B04-51A1-AAC6-201727A361CE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountFactoryBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAccountFactoryBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAccountFactoryBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnrollAccountsRequestAccounts extends $tea.Model {
  /**
   * @remarks
   * The account ID. This parameter is required.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnrollAccountsRequestBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
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
   * Specifies whether to skip the baseline item. Valid values:
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountFactoryBaselineRequestBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item. The value of this parameter is a JSON string.
   * 
   * @example
   * {\\"EnabledServices\\":[\\"CEN_TR\\",\\"CDT\\",\\"CMS\\",\\"KMS\\"]}
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
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequestBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
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
   * Specifies whether to skip the baseline item. Valid values:
   * 
   * *   false: The baseline item is not skipped.
   * *   true: The baseline item is skipped.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagValue
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountShrinkRequestBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
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
   * Specifies whether to skip the baseline item. Valid values:
   * 
   * *   false: The baseline item is not skipped.
   * *   true: The baseline item is skipped.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountFactoryBaselineResponseBodyBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configuration of the baseline item.
   * 
   * The value is a JSON string.
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
   * 1097526274671790
   */
  name?: string;
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
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyErrorInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputsBaselineItems extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputsTag extends $tea.Model {
  key?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyInputs extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEnrolledAccountResponseBodyProgress extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn extends $tea.Model {
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
   * The type of the baseline item.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
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
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselineItemsResponseBodyBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The dependency of the baseline item.
   */
  dependsOn?: ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn[];
  /**
   * @remarks
   * The description of the baseline item.
   * 
   * @example
   * Notification.
   */
  description?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_ACCOUNT_NOTIFICATION
   */
  name?: string;
  /**
   * @remarks
   * The type of the baseline item.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
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
      dependsOn: 'DependsOn',
      description: 'Description',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependsOn: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn },
      description: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountFactoryBaselinesResponseBodyBaselines extends $tea.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Default
   */
  baselineName?: string;
  /**
   * @remarks
   * The time at which the baseline was created.
   * 
   * @example
   * 2021-11-30T09:09:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Default baseline
   */
  description?: string;
  /**
   * @remarks
   * The type of the baseline. Valid values:
   * 
   * *   System: default baseline.
   * *   Custom: custom baseline.
   * 
   * @example
   * Custom
   */
  type?: string;
  /**
   * @remarks
   * The time when the baseline was updated.
   * 
   * @example
   * 2022-12-29T07:08:40Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      baselineName: 'BaselineName',
      createTime: 'CreateTime',
      description: 'Description',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineName: 'string',
      createTime: 'string',
      description: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnrolledAccountsResponseBodyEnrolledAccounts extends $tea.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 19534534552*****
   */
  accountUid?: number;
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The time at which the account was created.
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
   * TestAccount
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
   * The ID of the billing account.
   * 
   * @example
   * 13161210500*****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The creation status of the account. Valid values:
   * 
   * *   Pending: The account is waiting to be created.
   * *   Running: The account is being created.
   * *   Finished: The account is created.
   * *   Failed: The account failed to be created.
   * *   Scheduling: The account is being scheduled.
   * *   ScheduleFailed: The account failed to be scheduled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the information about the account was updated.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
      baselineId: 'string',
      createTime: 'string',
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActionsGuidance extends $tea.Model {
  /**
   * @remarks
   * The display name of the fixing button.
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
   */
  content?: string;
  /**
   * @remarks
   * The title of the fixing procedure.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediationActions extends $tea.Model {
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
   */
  costDescription?: string;
  /**
   * @remarks
   * The description of the fixing item.
   * 
   * >  This parameter is returned only if the value of `RemediationType` is `Analysis`.
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
   */
  notice?: string;
  /**
   * @remarks
   * The fixing suggestion.
   * 
   * >  This parameter is returned only if the value of `RemediationType` is `Analysis`.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata extends $tea.Model {
  /**
   * @remarks
   * The display name of the resource property.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata extends $tea.Model {
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
   */
  description?: string;
  /**
   * @remarks
   * The display name of the check item.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetadataResponseBodyEvaluationMetadata extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties extends $tea.Model {
  /**
   * @remarks
   * The name of the resource attribute.
   * 
   * @example
   * DisplayName
   */
  propertyName?: string;
  /**
   * @remarks
   * The value of the resource attribute.
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
      propertyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationMetricDetailsResponseBodyResources extends $tea.Model {
  /**
   * @remarks
   * 合规状态。取值：
   * - NonCompliant：不合规。
   * - Excluded：已忽略。
   * - PendingExclusion：已忽略未生效。
   * - PendingInclusion：已取消忽略未生效。
   * 
   * @example
   * NonCompliant
   */
  complianceType?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The check results further analyzed by auxiliary decision-making.
   * 
   * >  This parameter is returned only when the check item supports the auxiliary decision-making feature.
   * 
   * @example
   * RecentUnloginRamUser
   */
  resourceClassification?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 26435103783237****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 176618589410****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The attributes of the resource.
   */
  resourceProperties?: ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::RAM::User
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      regionId: 'RegionId',
      resourceClassification: 'ResourceClassification',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceProperties: 'ResourceProperties',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      regionId: 'string',
      resourceClassification: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceProperties: { 'type': 'array', 'itemType': ListEvaluationMetricDetailsResponseBodyResourcesResourceProperties },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * EcsInsightEnableFailed
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unable to enable ECS Insight due to a server error.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary extends $tea.Model {
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 2
   */
  nonCompliant?: number;
  static names(): { [key: string]: string } {
    return {
      nonCompliant: 'NonCompliant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonCompliant: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResultsMetricResults extends $tea.Model {
  /**
   * @remarks
   * The error information.
   * 
   * >  This parameter is returned only if the value of `Status` is `Failed`.
   */
  errorInfo?: ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo;
  /**
   * @remarks
   * The end time of the check item. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-13T03:34:02Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * r7xdcu****
   */
  id?: string;
  /**
   * @remarks
   * The checked resources.
   */
  resourcesSummary?: ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary;
  /**
   * @remarks
   * The rate of the non-compliant resources.
   * 
   * @example
   * 0.67
   */
  result?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   Error: high risk
   * *   Warning: medium risk
   * *   None: no risk
   * 
   * @example
   * Error
   */
  risk?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   Running: The check is in progress.
   * *   Finished: The check is complete.
   * *   failed: The check fails.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfo: 'ErrorInfo',
      evaluationTime: 'EvaluationTime',
      id: 'Id',
      resourcesSummary: 'ResourcesSummary',
      result: 'Result',
      risk: 'Risk',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfo: ListEvaluationResultsResponseBodyResultsMetricResultsErrorInfo,
      evaluationTime: 'string',
      id: 'string',
      resourcesSummary: ListEvaluationResultsResponseBodyResultsMetricResultsResourcesSummary,
      result: 'number',
      risk: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationResultsResponseBodyResults extends $tea.Model {
  /**
   * @remarks
   * The end time of the overall check. The time is displayed in UTC.
   * 
   * @example
   * 2023-12-13T03:35:00Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The check results.
   */
  metricResults?: ListEvaluationResultsResponseBodyResultsMetricResults[];
  /**
   * @remarks
   * The status of the overall check. Valid values:
   * 
   * *   Running: The check is in progress.
   * *   Finished: The check is complete.
   * *   failed: The check fails.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The overall score.
   * 
   * @example
   * 0.6453
   */
  totalScore?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationTime: 'EvaluationTime',
      metricResults: 'MetricResults',
      status: 'Status',
      totalScore: 'TotalScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationTime: 'string',
      metricResults: { 'type': 'array', 'itemType': ListEvaluationResultsResponseBodyResultsMetricResults },
      status: 'string',
      totalScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory extends $tea.Model {
  /**
   * @remarks
   * The time when the score was generated. The time is in UTC.
   * 
   * @example
   * 2024-06-30T03:34:02Z
   */
  evaluationTime?: string;
  /**
   * @remarks
   * The score.
   * 
   * Valid values: 0 to 1.
   * 
   * @example
   * 0.6753
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationTime: 'EvaluationTime',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationTime: 'string',
      score: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationScoreHistoryResponseBodyScoreHistory extends $tea.Model {
  /**
   * @remarks
   * The historical scores.
   */
  totalScoreHistory?: ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory[];
  static names(): { [key: string]: string } {
    return {
      totalScoreHistory: 'TotalScoreHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalScoreHistory: { 'type': 'array', 'itemType': ListEvaluationScoreHistoryResponseBodyScoreHistoryTotalScoreHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountFactoryBaselineRequestBaselineItems extends $tea.Model {
  /**
   * @remarks
   * The configurations of the baseline item. The value of this parameter is a JSON string.
   * 
   * @example
   * {\\"EnabledServices\\":[\\"CEN_TR\\",\\"CDT\\",\\"CMS\\",\\"KMS\\"]}
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
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("governance", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Applies an account baseline to multiple existing resource accounts at a time.
   * 
   * @remarks
   * You can call this operation to apply an account baseline to existing resource accounts.
   * Accounts are enrolled in the account factory in asynchronous mode. After a resource account is created, an account baseline is applied to the account. You can call the [GetEnrolledAccount](https://help.aliyun.com/document_detail/609062.html) operation to query the details of the account enrolled in the account factory and check whether the account baseline is applied to the account.
   * 
   * @param request - BatchEnrollAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEnrollAccountsResponse
   */
  async batchEnrollAccountsWithOptions(request: BatchEnrollAccountsRequest, runtime: $Util.RuntimeOptions): Promise<BatchEnrollAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accounts)) {
      query["Accounts"] = request.accounts;
    }

    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchEnrollAccounts",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchEnrollAccountsResponse>(await this.callApi(params, req, runtime), new BatchEnrollAccountsResponse({}));
  }

  /**
   * Applies an account baseline to multiple existing resource accounts at a time.
   * 
   * @remarks
   * You can call this operation to apply an account baseline to existing resource accounts.
   * Accounts are enrolled in the account factory in asynchronous mode. After a resource account is created, an account baseline is applied to the account. You can call the [GetEnrolledAccount](https://help.aliyun.com/document_detail/609062.html) operation to query the details of the account enrolled in the account factory and check whether the account baseline is applied to the account.
   * 
   * @param request - BatchEnrollAccountsRequest
   * @returns BatchEnrollAccountsResponse
   */
  async batchEnrollAccounts(request: BatchEnrollAccountsRequest): Promise<BatchEnrollAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchEnrollAccountsWithOptions(request, runtime);
  }

  /**
   * Creates a baseline of the account factory.
   * 
   * @param request - CreateAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountFactoryBaselineResponse
   */
  async createAccountFactoryBaselineWithOptions(request: CreateAccountFactoryBaselineRequest, runtime: $Util.RuntimeOptions): Promise<CreateAccountFactoryBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!Util.isUnset(request.baselineName)) {
      query["BaselineName"] = request.baselineName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new CreateAccountFactoryBaselineResponse({}));
  }

  /**
   * Creates a baseline of the account factory.
   * 
   * @param request - CreateAccountFactoryBaselineRequest
   * @returns CreateAccountFactoryBaselineResponse
   */
  async createAccountFactoryBaseline(request: CreateAccountFactoryBaselineRequest): Promise<CreateAccountFactoryBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Deletes an account factory baseline.
   * 
   * @param request - DeleteAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountFactoryBaselineResponse
   */
  async deleteAccountFactoryBaselineWithOptions(request: DeleteAccountFactoryBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountFactoryBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new DeleteAccountFactoryBaselineResponse({}));
  }

  /**
   * Deletes an account factory baseline.
   * 
   * @param request - DeleteAccountFactoryBaselineRequest
   * @returns DeleteAccountFactoryBaselineResponse
   */
  async deleteAccountFactoryBaseline(request: DeleteAccountFactoryBaselineRequest): Promise<DeleteAccountFactoryBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Enrolls an account. You can create a new account or manage an existing account in the account factory.
   * 
   * @remarks
   * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
   * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
   * 
   * @param tmpReq - EnrollAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnrollAccountResponse
   */
  async enrollAccountWithOptions(tmpReq: EnrollAccountRequest, runtime: $Util.RuntimeOptions): Promise<EnrollAccountResponse> {
    Util.validateModel(tmpReq);
    let request = new EnrollAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountNamePrefix)) {
      query["AccountNamePrefix"] = request.accountNamePrefix;
    }

    if (!Util.isUnset(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.payerAccountUid)) {
      query["PayerAccountUid"] = request.payerAccountUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resellAccountType)) {
      query["ResellAccountType"] = request.resellAccountType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnrollAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnrollAccountResponse>(await this.callApi(params, req, runtime), new EnrollAccountResponse({}));
  }

  /**
   * Enrolls an account. You can create a new account or manage an existing account in the account factory.
   * 
   * @remarks
   * You can call this API operation to create a new account or manage an existing account and apply the account baseline to the account.
   * Accounts are created in asynchronous mode. After you create an account, you can apply the account baseline to the account. You can call the [GetEnrolledAccount API](~~GetEnrolledAccount~~) operation to view the details about the account to obtain the result of applying the account baseline to the account.
   * 
   * @param request - EnrollAccountRequest
   * @returns EnrollAccountResponse
   */
  async enrollAccount(request: EnrollAccountRequest): Promise<EnrollAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enrollAccountWithOptions(request, runtime);
  }

  /**
   * Obtains the details of an account factory baseline.
   * 
   * @param request - GetAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountFactoryBaselineResponse
   */
  async getAccountFactoryBaselineWithOptions(request: GetAccountFactoryBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountFactoryBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new GetAccountFactoryBaselineResponse({}));
  }

  /**
   * Obtains the details of an account factory baseline.
   * 
   * @param request - GetAccountFactoryBaselineRequest
   * @returns GetAccountFactoryBaselineResponse
   */
  async getAccountFactoryBaseline(request: GetAccountFactoryBaselineRequest): Promise<GetAccountFactoryBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountFactoryBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the details about an account that is enrolled in the account factory.
   * 
   * @param request - GetEnrolledAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnrolledAccountResponse
   */
  async getEnrolledAccountWithOptions(request: GetEnrolledAccountRequest, runtime: $Util.RuntimeOptions): Promise<GetEnrolledAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountUid)) {
      query["AccountUid"] = request.accountUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEnrolledAccount",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEnrolledAccountResponse>(await this.callApi(params, req, runtime), new GetEnrolledAccountResponse({}));
  }

  /**
   * Queries the details about an account that is enrolled in the account factory.
   * 
   * @param request - GetEnrolledAccountRequest
   * @returns GetEnrolledAccountResponse
   */
  async getEnrolledAccount(request: GetEnrolledAccountRequest): Promise<GetEnrolledAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEnrolledAccountWithOptions(request, runtime);
  }

  /**
   * Queries a list of baseline items that are supported by the account factory of Cloud Governance Center (CGC).
   * 
   * @param request - ListAccountFactoryBaselineItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountFactoryBaselineItemsResponse
   */
  async listAccountFactoryBaselineItemsWithOptions(request: ListAccountFactoryBaselineItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountFactoryBaselineItemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.versions)) {
      query["Versions"] = request.versions;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountFactoryBaselineItems",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountFactoryBaselineItemsResponse>(await this.callApi(params, req, runtime), new ListAccountFactoryBaselineItemsResponse({}));
  }

  /**
   * Queries a list of baseline items that are supported by the account factory of Cloud Governance Center (CGC).
   * 
   * @param request - ListAccountFactoryBaselineItemsRequest
   * @returns ListAccountFactoryBaselineItemsResponse
   */
  async listAccountFactoryBaselineItems(request: ListAccountFactoryBaselineItemsRequest): Promise<ListAccountFactoryBaselineItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountFactoryBaselineItemsWithOptions(request, runtime);
  }

  /**
   * Obtains a list of baselines in the account factory.
   * 
   * @param request - ListAccountFactoryBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountFactoryBaselinesResponse
   */
  async listAccountFactoryBaselinesWithOptions(request: ListAccountFactoryBaselinesRequest, runtime: $Util.RuntimeOptions): Promise<ListAccountFactoryBaselinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAccountFactoryBaselines",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAccountFactoryBaselinesResponse>(await this.callApi(params, req, runtime), new ListAccountFactoryBaselinesResponse({}));
  }

  /**
   * Obtains a list of baselines in the account factory.
   * 
   * @param request - ListAccountFactoryBaselinesRequest
   * @returns ListAccountFactoryBaselinesResponse
   */
  async listAccountFactoryBaselines(request: ListAccountFactoryBaselinesRequest): Promise<ListAccountFactoryBaselinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAccountFactoryBaselinesWithOptions(request, runtime);
  }

  /**
   * Queries a list of accounts that are enrolled in the account factory.
   * 
   * @param request - ListEnrolledAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnrolledAccountsResponse
   */
  async listEnrolledAccountsWithOptions(request: ListEnrolledAccountsRequest, runtime: $Util.RuntimeOptions): Promise<ListEnrolledAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEnrolledAccounts",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEnrolledAccountsResponse>(await this.callApi(params, req, runtime), new ListEnrolledAccountsResponse({}));
  }

  /**
   * Queries a list of accounts that are enrolled in the account factory.
   * 
   * @param request - ListEnrolledAccountsRequest
   * @returns ListEnrolledAccountsResponse
   */
  async listEnrolledAccounts(request: ListEnrolledAccountsRequest): Promise<ListEnrolledAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEnrolledAccountsWithOptions(request, runtime);
  }

  /**
   * Queries all available information about check items in a governance maturity check, including the name, ID, description, stage, resource metadata, and fixing guide.
   * 
   * @param request - ListEvaluationMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationMetadataResponse
   */
  async listEvaluationMetadataWithOptions(request: ListEvaluationMetadataRequest, runtime: $Util.RuntimeOptions): Promise<ListEvaluationMetadataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvaluationMetadata",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEvaluationMetadataResponse>(await this.callApi(params, req, runtime), new ListEvaluationMetadataResponse({}));
  }

  /**
   * Queries all available information about check items in a governance maturity check, including the name, ID, description, stage, resource metadata, and fixing guide.
   * 
   * @param request - ListEvaluationMetadataRequest
   * @returns ListEvaluationMetadataResponse
   */
  async listEvaluationMetadata(request: ListEvaluationMetadataRequest): Promise<ListEvaluationMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEvaluationMetadataWithOptions(request, runtime);
  }

  /**
   * Queries the non-compliant resource information of a check item, including the name, ID, category, type, region, and related metadata of non-compliant resources.
   * 
   * @param request - ListEvaluationMetricDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationMetricDetailsResponse
   */
  async listEvaluationMetricDetailsWithOptions(request: ListEvaluationMetricDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListEvaluationMetricDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvaluationMetricDetails",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEvaluationMetricDetailsResponse>(await this.callApi(params, req, runtime), new ListEvaluationMetricDetailsResponse({}));
  }

  /**
   * Queries the non-compliant resource information of a check item, including the name, ID, category, type, region, and related metadata of non-compliant resources.
   * 
   * @param request - ListEvaluationMetricDetailsRequest
   * @returns ListEvaluationMetricDetailsResponse
   */
  async listEvaluationMetricDetails(request: ListEvaluationMetricDetailsRequest): Promise<ListEvaluationMetricDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEvaluationMetricDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the result and status of a governance maturity check.
   * 
   * @param request - ListEvaluationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationResultsResponse
   */
  async listEvaluationResultsWithOptions(request: ListEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvaluationResults",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEvaluationResultsResponse>(await this.callApi(params, req, runtime), new ListEvaluationResultsResponse({}));
  }

  /**
   * Queries the result and status of a governance maturity check.
   * 
   * @param request - ListEvaluationResultsRequest
   * @returns ListEvaluationResultsResponse
   */
  async listEvaluationResults(request: ListEvaluationResultsRequest): Promise<ListEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the historical scores of a governance maturity check.
   * 
   * @param request - ListEvaluationScoreHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEvaluationScoreHistoryResponse
   */
  async listEvaluationScoreHistoryWithOptions(request: ListEvaluationScoreHistoryRequest, runtime: $Util.RuntimeOptions): Promise<ListEvaluationScoreHistoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEvaluationScoreHistory",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEvaluationScoreHistoryResponse>(await this.callApi(params, req, runtime), new ListEvaluationScoreHistoryResponse({}));
  }

  /**
   * Queries the historical scores of a governance maturity check.
   * 
   * @param request - ListEvaluationScoreHistoryRequest
   * @returns ListEvaluationScoreHistoryResponse
   */
  async listEvaluationScoreHistory(request: ListEvaluationScoreHistoryRequest): Promise<ListEvaluationScoreHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEvaluationScoreHistoryWithOptions(request, runtime);
  }

  /**
   * Performs a governance maturity check.
   * 
   * @param tmpReq - RunEvaluationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunEvaluationResponse
   */
  async runEvaluationWithOptions(tmpReq: RunEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<RunEvaluationResponse> {
    Util.validateModel(tmpReq);
    let request = new RunEvaluationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.metricIds)) {
      request.metricIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricIds, "MetricIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!Util.isUnset(request.metricIdsShrink)) {
      query["MetricIds"] = request.metricIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunEvaluation",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunEvaluationResponse>(await this.callApi(params, req, runtime), new RunEvaluationResponse({}));
  }

  /**
   * Performs a governance maturity check.
   * 
   * @param request - RunEvaluationRequest
   * @returns RunEvaluationResponse
   */
  async runEvaluation(request: RunEvaluationRequest): Promise<RunEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runEvaluationWithOptions(request, runtime);
  }

  /**
   * Updates a baseline of the account factory.
   * 
   * @param request - UpdateAccountFactoryBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountFactoryBaselineResponse
   */
  async updateAccountFactoryBaselineWithOptions(request: UpdateAccountFactoryBaselineRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountFactoryBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.baselineId)) {
      query["BaselineId"] = request.baselineId;
    }

    if (!Util.isUnset(request.baselineItems)) {
      query["BaselineItems"] = request.baselineItems;
    }

    if (!Util.isUnset(request.baselineName)) {
      query["BaselineName"] = request.baselineName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAccountFactoryBaseline",
      version: "2021-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAccountFactoryBaselineResponse>(await this.callApi(params, req, runtime), new UpdateAccountFactoryBaselineResponse({}));
  }

  /**
   * Updates a baseline of the account factory.
   * 
   * @param request - UpdateAccountFactoryBaselineRequest
   * @returns UpdateAccountFactoryBaselineResponse
   */
  async updateAccountFactoryBaseline(request: UpdateAccountFactoryBaselineRequest): Promise<UpdateAccountFactoryBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountFactoryBaselineWithOptions(request, runtime);
  }

}
