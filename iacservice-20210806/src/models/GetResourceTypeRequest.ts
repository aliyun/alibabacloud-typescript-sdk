// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to filter out read-only properties.
   * 
   * @example
   * false
   */
  filterReadOnly?: boolean;
  /**
   * @remarks
   * The Terraform provider version. If left empty, the latest version is used by default.
   * 
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

