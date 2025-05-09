// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the encryption parameter. Multiple encryption parameters can form a JSON array in the format of ["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"]. Each JSON array can contain a maximum of 10 encryption parameters. Multiple encryption parameters in the array are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["secretParameter","secretParameter1"]
   */
  names?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to decrypt the parameter value. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

