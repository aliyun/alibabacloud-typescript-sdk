// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretVersionIdsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include secret versions that do not have version stages in the response.
   * 
   * Valid values:
   * - false (default): does not include
   * - true: includes
   * 
   * @example
   * false
   */
  includeDeprecated?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The secret name or secret Amazon Resource Name (ARN).
   * >When accessing a secret under another Alibaba Cloud account, you must specify the secret ARN. The format of the secret ARN is `acs:kms:${region}:${account}:secret/${secret-name}`.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      includeDeprecated: 'IncludeDeprecated',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeDeprecated: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

