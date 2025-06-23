// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTlsConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the TLS policy. The value is a JSON string that contains the following fields:
   * 
   * *   **ssl_protocols**: the version of TLS. This field is required. Data type: string. Valid values:
   * 
   *     *   **tls1.0**: TLS 1.0 and later
   *     *   **tls1.1**: TLS 1.1 and later
   *     *   **tls1.2**: TLS 1.2 and later
   * 
   * *   **ssl_ciphers**: the type of the cipher suite. This field is required. Data type: string. Valid values:
   * 
   *     *   **all**: all cipher suites, which include strong and weak cipher suites
   *     *   **improved**: enhanced cipher suites
   *     *   **strong**: strong cipher suites
   *     *   **default**: default cipher suites, which include only strong cipher suites
   * 
   * This parameter is required.
   * 
   * @example
   * {"ssl_protocols":"tls1.0","ssl_ciphers":"all"}
   */
  config?: string;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      domain: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

