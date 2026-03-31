// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregateCompliancePacksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of the account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-04b3fd170e340007****
   */
  aggregatorId?: string;
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
   * The ID of the compliance package. Separate multiple compliance package IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListAggregateCompliancePacks](https://help.aliyun.com/document_detail/262059.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackIds?: string;
  /**
   * @remarks
   * Specifies whether to delete the rules in the compliance package. Valid values:
   * 
   * *   true: The rules are deleted.
   * *   false (default): The rules are not deleted.
   * 
   * @example
   * false
   */
  deleteRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
      deleteRule: 'DeleteRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackIds: 'string',
      deleteRule: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

