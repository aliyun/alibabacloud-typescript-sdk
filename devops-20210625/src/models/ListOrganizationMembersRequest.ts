// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationMembersRequest extends $dara.Model {
  /**
   * @remarks
   * 返回信息中是否包含第三方信息，默认不包含。
   */
  containsExternInfo?: boolean;
  /**
   * @example
   * 1236666
   */
  externUid?: string;
  /**
   * @example
   * 1631845101798
   */
  joinTimeFrom?: number;
  /**
   * @example
   * 1631845101798
   */
  joinTimeTo?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  organizationMemberName?: string;
  /**
   * @example
   * Dingtalk
   */
  provider?: string;
  /**
   * @example
   * normal
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      containsExternInfo: 'containsExternInfo',
      externUid: 'externUid',
      joinTimeFrom: 'joinTimeFrom',
      joinTimeTo: 'joinTimeTo',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      organizationMemberName: 'organizationMemberName',
      provider: 'provider',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containsExternInfo: 'boolean',
      externUid: 'string',
      joinTimeFrom: 'number',
      joinTimeTo: 'number',
      maxResults: 'number',
      nextToken: 'string',
      organizationMemberName: 'string',
      provider: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

