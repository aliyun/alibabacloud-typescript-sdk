// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretVersionIdsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return deprecated secret versions.
   * 
   * Valid values:
   * 
   * *   false: no
   * *   true: yes
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  includeDeprecated?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the secret.
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

