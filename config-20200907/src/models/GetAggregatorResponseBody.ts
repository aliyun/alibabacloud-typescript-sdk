// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregatorResponseBodyAggregatorAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 171322098523****
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * Alice
   * 
   * **if can be null:**
   * false
   */
  accountName?: string;
  /**
   * @remarks
   * The resource directory to which the member belongs. Valid value: ResourceDirectory. ResourceDirectory indicates that the member belongs to a resource directory.
   * 
   * @example
   * ResourceDirectory
   */
  accountType?: string;
  /**
   * @remarks
   * The status of the configuration recorder for the member. Valid values:
   * 
   * *   REGISTRABLE: The configuration recorder is not registered.
   * *   BUILDING: The configuration recorder is being deployed.
   * *   REGISTERED: The configuration recorder is registered.
   * *   REBUILDING: The configuration recorder is being redeployed.
   * 
   * @example
   * REGISTERED
   */
  recorderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
      recorderStatus: 'RecorderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
      recorderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregatorTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregator extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account that is used to create the account group.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The number of members in the account group.
   * 
   * @example
   * 2
   */
  aggregatorAccountCount?: number;
  /**
   * @remarks
   * The information about the members in the account group.
   */
  aggregatorAccounts?: GetAggregatorResponseBodyAggregatorAggregatorAccounts[];
  /**
   * @remarks
   * The timestamp generated when the account group was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1623034091000
   */
  aggregatorCreateTimestamp?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-88ea626622af0055****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * @example
   * Test-Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The status of the account group. Valid values:
   * 
   * *   0: The account group is being created.
   * *   1: The account group was created.
   * 
   * @example
   * 1
   */
  aggregatorStatus?: number;
  /**
   * @remarks
   * The type of the account group. Valid values:
   * 
   * *   RD: a global account group.
   * *   FOLDER: an account group for a folder.
   * *   CUSTOM: a custom account group.
   * 
   * @example
   * CUSTOM
   */
  aggregatorType?: string;
  /**
   * @remarks
   * The description of the account group.
   * 
   * @example
   * The description of the test account group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the attached folder of the account group.
   * 
   * @example
   * fd-brHdgv****
   */
  folderId?: string;
  folderName?: string;
  /**
   * @remarks
   * tags
   */
  tags?: GetAggregatorResponseBodyAggregatorTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorAccountCount: 'AggregatorAccountCount',
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      description: 'Description',
      folderId: 'FolderId',
      folderName: 'FolderName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorAccountCount: 'number',
      aggregatorAccounts: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorAggregatorAccounts },
      aggregatorCreateTimestamp: 'string',
      aggregatorId: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      description: 'string',
      folderId: 'string',
      folderName: 'string',
      tags: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorTags },
    };
  }

  validate() {
    if(Array.isArray(this.aggregatorAccounts)) {
      $dara.Model.validateArray(this.aggregatorAccounts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the account group.
   */
  aggregator?: GetAggregatorResponseBodyAggregator;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 733DD93C-2277-4905-AE0C-0BA95C04B8BC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: GetAggregatorResponseBodyAggregator,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aggregator && typeof (this.aggregator as any).validate === 'function') {
      (this.aggregator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

