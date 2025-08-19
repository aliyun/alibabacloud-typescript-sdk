// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCAInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the private CA instance.
   * 
   * >  After you purchase a private CA instance by using the [SSL Certificates Service console](https://yundun.console.aliyun.com/?p=cas#/pca/rootlist), you can click **Details** for the private CA instance on the **Private Certificates** page to query the ID of the private CA instance.
   * 
   * @example
   * cas-member-0hmi****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

