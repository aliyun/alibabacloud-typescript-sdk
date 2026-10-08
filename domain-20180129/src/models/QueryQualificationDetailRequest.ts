// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQualificationDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * S20181*****85212
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * API type for qualification verification. Fixed value: **knet**.
   * 
   * This parameter is required.
   * 
   * @example
   * knet
   */
  qualificationType?: string;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      qualificationType: 'QualificationType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      qualificationType: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

