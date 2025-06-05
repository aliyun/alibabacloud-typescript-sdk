// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAirflowLoginTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://data-dms.aliyuncs.com/airflow/x/xxxx/af-ehrmszbxxxxxxx
   */
  host?: string;
  /**
   * @example
   * f432d77de03b6b95fc24f91414e29c
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

