// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretVersionIdsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include credential versions that have no version stages in the response.
   * 
   * Valid values:
   * 
   * - false (default): No
   * 
   * - true: Yes
   * 
   * @example
   * false
   */
  includeDeprecated?: string;
  /**
   * @remarks
   * The number of the page to return for a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name or Alibaba Cloud Resource Name (ARN) of the credential.
   * 
   * > When you access a credential that belongs to another Alibaba Cloud account, you must specify the ARN of the credential. The ARN of a credential is in the format of `acs:kms:${region}:${account}:secret/${secret-name}`.
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

