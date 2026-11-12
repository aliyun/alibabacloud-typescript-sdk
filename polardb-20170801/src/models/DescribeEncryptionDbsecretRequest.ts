// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionDBSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. Usage notes: This parameter is required. If it is not provided, the InvalidDBClusterId.Malformed (400) error is returned. This API supports only PolarDB for MySQL clusters.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

