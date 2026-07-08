// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the domain name. Valid values:
   * 
   * - **share**: The domain name is added to WAF in CNAME record mode.
   * 
   * - **asset**: The domain name is added to WAF as a custom asset.
   * 
   * - **hybrid_cloud_cname**: The domain name is added to WAF in hybrid cloud CNAME record mode.
   * 
   * - **tgw**: The domain name is added to WAF in cloud native mode.
   * 
   * This parameter is required.
   * 
   * @example
   * share
   */
  accessOrigin?: string;
  /**
   * @remarks
   * The domain name that you want to query for ownership verification content.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessOrigin: 'AccessOrigin',
      domainName: 'DomainName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessOrigin: 'string',
      domainName: 'string',
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

