// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * false
   */
  filterReadOnly?: boolean;
  /**
   * @example
   * 1.227.0
   */
  terraformProviderVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      filterReadOnly: 'filterReadOnly',
      terraformProviderVersion: 'terraformProviderVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      filterReadOnly: 'boolean',
      terraformProviderVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

