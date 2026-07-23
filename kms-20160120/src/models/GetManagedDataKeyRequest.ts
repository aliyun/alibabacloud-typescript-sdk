// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedDataKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the managed data key (DK). This parameter is required.
   * 
   * @example
   * example-data-key
   */
  dataKeyName?: string;
  /**
   * @remarks
   * The version number of the managed data key (DK). This parameter is optional. If you set this parameter to a specific version number, the plaintext of the specified version of the managed data key (DK) is returned.
   * 
   * @example
   * xH6OPUmz
   */
  dataKeyVersionId?: string;
  /**
   * @remarks
   * Specifies whether to use the latest version of the managed data key (DK) when no version number is provided. Valid values:
   * 
   * - true: Returns the latest version of the managed data key (DK).
   * - false: Returns the first version of the managed data key (DK).
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  useLatest?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataKeyName: 'DataKeyName',
      dataKeyVersionId: 'DataKeyVersionId',
      useLatest: 'UseLatest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataKeyName: 'string',
      dataKeyVersionId: 'string',
      useLatest: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

