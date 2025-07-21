// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecretRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the resource tags of the secret. Valid values:
   * 
   * *   true: The resource tags are returned.
   * *   false: The resource tags are not returned. This is the default value.
   * 
   * @example
   * true
   */
  fetchTags?: string;
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
      fetchTags: 'FetchTags',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
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

