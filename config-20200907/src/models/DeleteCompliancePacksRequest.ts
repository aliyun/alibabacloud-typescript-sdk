// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCompliancePacksRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the compliance package. Separate multiple compliance package IDs with commas (,).
   * 
   * For more information about how to obtain the ID of a compliance package, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
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
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
      deleteRule: 'DeleteRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

