// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAggregatorRequestAggregatorAccounts } from "./CreateAggregatorRequestAggregatorAccounts";
import { CreateAggregatorRequestTag } from "./CreateAggregatorRequestTag";


export class CreateAggregatorRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the member accounts in the account group. Example:
   * 
   *     [{
   *     	"accountId": 171322098523****,
   *     	"accountType":"ResourceDirectory",
   *                     "accountName":"Alice"
   *     }, {
   *     	"accountId": 100532098349****,
   *     	"accountType":"ResourceDirectory",
   *                     "accountName":"Tom"
   *     }]
   * 
   * >  If `AggregatorType` is set to `RD` or `FOLDER`, this parameter can be left empty, which indicates that all accounts in the resource directory are added to the global account group.
   * 
   * **if can be null:**
   * false
   */
  aggregatorAccounts?: CreateAggregatorRequestAggregatorAccounts[];
  /**
   * @remarks
   * The name of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The type of the account group. Valid values:
   * 
   * *   RD: global account group.
   * *   FOLDER: account group of the folder.
   * *   CUSTOM (default): custom account group.
   * 
   * @example
   * CUSTOM
   */
  aggregatorType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * Aggregator description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the folder to which the account group is attached. You must specify this parameter if `AggregatorType` is set to `FOLDER`. Multiple resource folder IDs should be separated by commas (,).
   * 
   * @example
   * fd-brHdgv****,fd-brHdgk****
   */
  folderId?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
   */
  tag?: CreateAggregatorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccounts: { 'type': 'array', 'itemType': CreateAggregatorRequestAggregatorAccounts },
      aggregatorName: 'string',
      aggregatorType: 'string',
      clientToken: 'string',
      description: 'string',
      folderId: 'string',
      tag: { 'type': 'array', 'itemType': CreateAggregatorRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.aggregatorAccounts)) {
      $dara.Model.validateArray(this.aggregatorAccounts);
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

