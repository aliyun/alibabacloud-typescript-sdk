// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member account in the resource directory for multi-account security management.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source that you want to query.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      resourceDirectoryAccountId: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

