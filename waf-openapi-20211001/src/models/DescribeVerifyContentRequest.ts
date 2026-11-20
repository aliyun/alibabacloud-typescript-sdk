// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The access source. Valid values:
   * 
   * - **share**: public cloud CNAME access
   * 
   * - **asset**: custom asset access
   * 
   * - **hybrid_cloud_cname**: hybrid cloud CNAME access
   * 
   * - **tgw**: cloud native mode
   * 
   * This parameter is required.
   * 
   * @example
   * share
   */
  accessOrigin?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the WAF instance. You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
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

