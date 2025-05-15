// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEnrolledAccountResponseBodyInputsBaselineItems } from "./GetEnrolledAccountResponseBodyInputsBaselineItems";
import { GetEnrolledAccountResponseBodyInputsTag } from "./GetEnrolledAccountResponseBodyInputsTag";


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

