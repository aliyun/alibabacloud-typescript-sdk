// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedTagsRequestSoftwareId extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: Custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Lists prohibited software.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): Creates custom prohibited software.
   * 
   * @example
   * swb-83995ff2ae38****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProhibitedTagsRequestTagIds extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the prohibited software tag is a system built-in tag. Valid values:
   * - **true**: A system built-in tag that is shared across all Alibaba Cloud accounts and cannot be modified or deleted.
   * - **false**: A custom tag under the current Alibaba Cloud account.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the prohibited software tag. You can obtain the value from the following operations:
   * - [ListProhibitedTags](~~ListProhibitedTags~~): Lists prohibited software tags.
   * - [CreateProhibitedTag](~~CreateProhibitedTag~~): Creates a custom prohibited software tag.
   * 
   * @example
   * tag-3a5f8e50c396****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProhibitedTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the prohibited software tag. Fuzzy match is supported. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the software prohibition policy. You can obtain the value from the following operations:
   * - [ListProhibitedPolicies](~~ListProhibitedPolicies~~): Lists software prohibition policies.
   * - [CreateProhibitedPolicy](~~CreateProhibitedPolicy~~): Creates a software prohibition policy.
   * 
   * @example
   * pid-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @remarks
   * The unique identifier of the prohibited software.
   */
  softwareId?: ListProhibitedTagsRequestSoftwareId;
  /**
   * @remarks
   * The collection of prohibited software tag IDs. Duplicate values are not allowed. A maximum of 500 IDs can be specified.
   */
  tagIds?: ListProhibitedTagsRequestTagIds[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      softwareId: 'SoftwareId',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      softwareId: ListProhibitedTagsRequestSoftwareId,
      tagIds: { 'type': 'array', 'itemType': ListProhibitedTagsRequestTagIds },
    };
  }

  validate() {
    if(this.softwareId && typeof (this.softwareId as any).validate === 'function') {
      (this.softwareId as any).validate();
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

